import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Info from "./../components/Info/info.js";
import { getContacts } from "./../actions";
import { bindActionCreators } from "redux";

class HomeContainer extends Component {
  componentWillMount() {
    this.props.getContacts();
  }

  render() {
    console.log(this.props);
    return <Info />;
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contactReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getContacts }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

HomeContainer.propTypes = {
  contacts: PropTypes.object
};
