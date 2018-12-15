import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Info from "./../components/Info/info";
import WineItems from "./../widgets/wine_items.js";
import Modal from "./../components/Modal/modal.js";
import { getAllWines, getWine, deleteWine } from "./../actions";
import { bindActionCreators } from "redux";

class HomeContainer extends Component {
  state = {
    wines: [],
    isClicked: false
  };

  componentWillMount() {
    this.props.getAllWines();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.wines.wineList)
      this.setState({ wines: nextProps.wines.wineList });
  }

  _getWine = id => {
    this.setState({ isClicked: true });
    this.props.getWine(id);
  };

  _deleteWine = id => {
    this.props.deleteWine(id);
    window.location.reload();
  };

  renderItems = wines =>
    wines
      ? wines.map((item, index) => {
          return (
            <WineItems
              {...item}
              key={item.id}
              index={index}
              getWine={this._getWine}
              deleteWine={this._deleteWine}
            />
          );
        })
      : null;

  render() {
    const { wines } = this.state;
    return (
      <div>
        <Info />
        <Modal isClicked={this.state.isClicked} />
        {this.renderItems(wines)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wines: state.wineReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllWines, getWine, deleteWine }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

HomeContainer.propTypes = {
  wines: PropTypes.object
};
