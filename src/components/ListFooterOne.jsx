import React from "react";
import "./styleFooterOne.css";
import { FaMinus } from "react-icons/fa";
function ListFooterOne({title, one, two, three, four, five, six}) {
  return (
    <div className="list-footer">
      <h1>{title}</h1>
      <div className="minus">
        <FaMinus size={20} color="rgb(41, 182, 246)" />
        <FaMinus size={15} color="rgb(41, 182, 246)" />
      </div>
      <ul className="list-titles">
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
        <li>{four}</li>
        <li>{five}</li>
        <li>{six}</li>
      </ul>
    </div>
  );
}

export default ListFooterOne;
