import React, { Component } from "react";
import PropTypes from "prop-types";

class WineItems extends Component {
  toggle = index => {
    this.props.getWine(index);
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
