import React from "react";

const Add = props => (
  <div className="add_form_body" data-set="component-add_form">
    <div className="add_form_body__content">
      <div className="add_form_body__content-title">
        {props.page === "add" ? "Add Wine" : "Update Wine"}
      </div>
      <div className="add_form_body__content-input-title">
        <input
          type="text"
          placeholder="title"
          name="title"
          data-test="title-input"
          value={
            props.page === "edit" ? props.wine.title : props.addFormWine.title
          }
          onChange={props.onTextChange}
        />
      </div>
      <div className="add_form_body__content-input-country">
        <input
          type="text"
          placeholder="country"
          name="country"
          value={
            props.page === "edit"
              ? props.wine.country
              : props.addFormWine.country
          }
          onChange={props.onTextChange}
        />
      </div>
      <div className="add_form_body__content-input-year">
        <input
          type="text"
          placeholder="year"
          name="year"
          value={
            props.page === "edit" ? props.wine.year : props.addFormWine.year
          }
          onChange={props.onTextChange}
        />
      </div>
      <div className="add_form_body__content-input-submit">
        <input type="submit" onClick={props.submit} />
      </div>
    </div>
  </div>
);
export default Add;
