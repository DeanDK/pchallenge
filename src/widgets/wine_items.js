import React from "react";

const WineItems = wines => (
  <div className="element" onClick={e => test(wines.id)}>
    <div className="element__info">
      <div className="element__info-name">{wines.title}</div>
      <div className="element__info-company">{wines.country}</div>
    </div>
    <div className="element__image">
      <img src="/images/wine.png" alt="logo" height="50px" />
    </div>
  </div>
);

export default WineItems;
