import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addWine } from "./../actions";
import AddForm from "./../widgets/add_form.js";

class AddContainer extends Component {
  state = {
    wine: {
      title: "",
      country: "",
      year: ""
    }
  };

  _onTextChange = e => {
    let { wine } = this.state;
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    wine[fieldName] = fieldValue;
    this.setState({ wine });
  };

  formVerification = e => {
    const { wine } = this.state;
    const array = Object.values(wine);
    return array.every(this.notEmpty);
  };

  notEmpty = element => {
    return element !== "";
  };

  _submit = () => {
    if (this.formVerification()) {
      this.props.addWine(this.state.wine);
      alert(
        "Added :) This response should usually come from" +
          " the server an be displayed as a message. This serves just as confirmation :P"
      );
    }
  };

  render() {
    return (
      <AddForm
        onTextChange={this._onTextChange}
        submit={this._submit}
        page="add"
        addFormWine={this.state.wine}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    wines: state.wineReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addWine }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContainer);
