import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { arrayMove } from "react-sortable-hoc";

import Modal from "./../components/Modal/modal.js";
import Info from "./../components/Info/info.js";
import SortableList from "./../widgets/Sortables/sortable_list.js";
import LoadMore from "./../widgets/Pagination/load_more.js";
import { getContacts, getContactByName, getContactInfo } from "./../actions";
import { bindActionCreators } from "redux";

class HomeContainer extends Component {
  state = {
    list: [],
    limit: 8,
    displayLoadMore: false,
    isClicked: false
  };

  componentWillMount() {
    const { limit } = this.state;
    this.props.getContacts(0, limit);
    this.setState({ displayLoadMore: true });
  }

  componentWillReceiveProps(nextProps) {
    const { list } = this.state;
    const data = nextProps.contacts.contactList.data;
    if (!list.some(r => data.includes(r))) {
      const mergedList = list.concat(data);
      this.setState({ list: mergedList });
    }
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      list: arrayMove(this.state.list, oldIndex, newIndex)
    });
  };

  loadMore = () => {
    this.setState({ isClicked: false });
    const { limit } = this.state;
    const start = this.state.list.length;
    this.props.getContacts(start, limit);
  };

  handleByNameDispatch = (displayLoadMore, action) => {
    this.setState({ list: [], displayLoadMore }, () => {
      return action;
    });
  };

  _dispatchGetContactByName = name => {
    const { limit } = this.state;
    if (name) {
      this.handleByNameDispatch(false, this.props.getContactByName(name));
    } else {
      this.handleByNameDispatch(true, this.props.getContacts(0, limit));
    }
  };

  _dispatchGetContactInfo = id => {
    this.props.getContactInfo(id);
    this.setState({ isClicked: true });
  };

  render() {
    const { list, displayLoadMore } = this.state;
    if (list[0] === null || list[0] === undefined) {
      return (
        <div>
          <Info dispatchGetContactByName={this._dispatchGetContactByName} />
          <div />
        </div>
      );
    } else {
      return (
        <div>
          <Info dispatchGetContactByName={this._dispatchGetContactByName} />
          <Modal isClicked={this.state.isClicked} />
          <SortableList
            contacts={this.state.list}
            onSortEnd={this.onSortEnd}
            dispatchGetContactInfo={this._dispatchGetContactInfo}
            distance={40}
          />
          {displayLoadMore ? (
            <LoadMore onClick={() => this.loadMore()} />
          ) : null}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contactReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getContacts, getContactByName, getContactInfo },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

HomeContainer.propTypes = {
  contacts: PropTypes.object
};
