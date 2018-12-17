import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "./sortable_item.js";

const SortableList = SortableContainer(
  ({ contacts, dispatchGetContactInfo }) => {
    return (
      <ul>
        {contacts.map((value, index) => (
          <SortableItem
            key={index}
            index={index}
            value={value}
            dispatchGetContactInfo={dispatchGetContactInfo}
          />
        ))}
      </ul>
    );
  }
);

export default SortableList;
