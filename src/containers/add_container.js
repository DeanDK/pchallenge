import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addWine } from "./../actions";

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
    console.log(this.props);
    // form + onSumbit better option
    return (
      <div className="add_form_body">
        <div className="add_form_body__content">
          <div className="add_form_body__content-title">Add Wine</div>
          <div className="add_form_body__content-input-title">
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={this.onTextChange}
            />
          </div>
          <div className="add_form_body__content-input-country">
            <input
              type="text"
              placeholder="country"
              name="country"
              onChange={this.onTextChange}
            />
          </div>
          <div className="add_form_body__content-input-year">
            <input
              type="text"
              placeholder="year"
              name="year"
              onChange={this.onTextChange}
            />
          </div>
          <div className="add_form_body__content-input-submit">
            <input type="submit" onClick={this.submit} />
          </div>
        </div>
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
  return bindActionCreators({ addWine }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContainer);
