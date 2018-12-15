import React, { Component } from "react";

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
    const array = Object.values(this.state.wine);
    return array.every(this.notEmpty);
  };

  notEmpty = element => {
    return element !== "";
  };

  submit = () => {
    // ... formVerification
  };

  render() {
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

export default AddContainer;
