import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateWine, getWine } from "./../actions";
import AddForm from "./../widgets/add_form.js";

class EditContainer extends Component {
  state = {
    wine: {
      id: "",
      title: "hello",
      country: "hehe",
      year: "hehe"
    }
  };

  componentWillMount() {
    const id = window.location.href.split("/")[4];
    this.setState({ id }, () => {
      this.props.getWine(id);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.wines.wine) {
      const oneWine = { ...nextProps.wines.wine };
      this.setState({ wine: oneWine });
    }
  }

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
      this.props.updateWine(this.state.wine);
    }
  };

  render() {
    return (
      <AddForm
        onTextChange={this.onTextChange}
        submit={this.submit}
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
