import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class WineItems extends Component {
  toggle = index => {
    this.props.getWine(index);
  };

  delete = e => {
    e.stopPropagation();
    console.log("tocuhed");
  };

  render() {
    if (typeof this.props === "object") {
      return (
        <div
          className="element"
          data-test="component-wine_items"
          onClick={e => this.toggle(this.props.id)}
        >
          <div className="element__info">
            <div className="element__info-name">{this.props.title}</div>
            <div className="element__info-company">{this.props.country}</div>
          </div>
          <div className="element__image">
            <Link to="/edit">
              <FontAwesomeIcon icon="edit" className="element__image-edit" />
            </Link>
            <FontAwesomeIcon icon="trash" onClick={e => this.delete(e)} />
            <img src="/images/wine.png" alt="logo" height="50px" />
          </div>
        </div>
      );
    } else {
      return <div data-test="component-wine_items" />;
    }
  }
}

export default WineItems;

WineItems.propTypes = {
  wines: PropTypes.object
};
