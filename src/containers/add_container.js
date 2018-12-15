import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addWine } from "./../actions";
import AddForm from "./../widgets/add_form.js";

class AddContainer extends Component {
  state = {
    wine: {
      title: "",
      country: ",",
      year: ""
    }
  };

  onTextChange = e => {
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

  submit = () => {
    if (this.formVerification()) {
      this.props.addWine(this.state.wine);
    }
  };

  render() {
    return (
      <AddForm
        onTextChange={this.onTextChange}
        submit={this.submit}
        page="add"
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
