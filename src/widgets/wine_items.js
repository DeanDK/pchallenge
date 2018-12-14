import React from "react";
import PropTypes from "prop-types";

const WineItems = wines => {
  if (typeof wines === "object") {
    return (
      <div
        className="element"
        onClick={e => test(wines.id)}
        data-test="component-wine_items"
      >
        <div className="element__info">
          <div className="element__info-name">{wines.title}</div>
          <div className="element__info-company">{wines.country}</div>
        </div>
        <div className="element__image">
          <img src="/images/wine.png" alt="logo" height="50px" />
        </div>
      </div>
    );
  } else {
    return <div data-test="component-wine_items" />;
  }
};

export default WineItems;

WineItems.propTypes = {
  wines: PropTypes.object
};
