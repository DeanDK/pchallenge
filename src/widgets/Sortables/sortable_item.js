import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SortableItem = SortableElement(
  ({ value, index, dispatchGetContactInfo, key }) => (
    <li className="element" onClick={e => dispatchGetContactInfo(value.id)}>
      <div className="element__info">
        <div className="element__info-name">{value.name}</div>
        <div className="element__info__sub">
          <FontAwesomeIcon icon="building" className="element__info-building" />
          <div className="element__info-company">{value.org_name}</div>
        </div>
      </div>
      <div className="element__image">
        <img src="/images/logo.PNG" alt="logo" height="50px" />
      </div>
    </li>
  )
);

export default SortableItem;
