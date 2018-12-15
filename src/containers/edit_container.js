import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateWine, getWine } from "./../actions";
import AddForm from "./../widgets/add_form.js";

class EditContainer extends Component {
  state = {
    wine: {
      id: "",
      title: "",
      country: "",
      year: ""
    }
  };

  componentWillMount() {
    const id = window.location.href.split("/")[4];
    this.setState({ id }, () => {
      this.props.getWine(id);
    });
  }

  componentWillReceiveProps(nextProps) {
    const { wine } = this.state;
    if (nextProps.wines.wine && !Object.values(wine).every(this.notEmpty)) {
      const oneWine = { ...nextProps.wines.wine };
      this.setState({ wine: oneWine });
    }
  }

  _onTextChange = e => {
    let { wine } = this.state;
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    wine[fieldName] = fieldValue;
    console.log(this.state.wine);
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
      this.props.updateWine(this.state.wine);
      alert(
        "Updated :) This response should usually come from" +
          " the server an be displayed as a message. This serves just as confirmation :P"
      );
    }
  };

  render() {
    return (
      <AddForm
        onTextChange={this._onTextChange}
        submit={this._submit}
        wine={this.state.wine}
        page="edit"
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
  return bindActionCreators({ updateWine, getWine }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContainer);
