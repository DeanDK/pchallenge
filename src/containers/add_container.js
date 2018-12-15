import React, { Component } from "react";

class AddContainer extends Component {
  render() {
    return (
      <div className="add_form_body">
        <div className="add_form_body__content">
          <div className="add_form_body__content-title">Add Wine</div>
          <div className="add_form_body__content-input-title">
            <input type="text" placeholder="title" />
          </div>
          <div className="add_form_body__content-input-country">
            <input type="text" placeholder="country" />
          </div>
          <div className="add_form_body__content-input-year">
            <input type="text" placeholder="year" />
          </div>
          <div className="add_form_body__content-input-submit">
            <input type="submit" />
          </div>
        </div>
      </div>
    );
  }
}

export default AddContainer;
