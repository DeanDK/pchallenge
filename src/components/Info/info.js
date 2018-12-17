import React from "react";

const Info = props => {
  const filterByName = e => {
    const name = e.target.value;
    if (e.key === "Enter" && name.length !== 1) {
      props.dispatchGetContactByName(name);
    }
  };

  return (
    <div className="info" data-test="component-info">
      <div className="info__name">People's List</div>
      <input
        type="text"
        className="info-input"
        placeholder="filter by a name + enter"
        onKeyPress={filterByName}
        onChange={filterByName}
      />
    </div>
  );
};

export default Info;
