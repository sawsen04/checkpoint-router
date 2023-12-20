import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./styleSectionOne.css";
function ListSectionOne(props) {
  return (
    <div className="elt-container">
      <h1>{props.title}</h1>
      <RiArrowDownSLine color="grey" size={25} />
    </div>
  );
}

export default ListSectionOne;
