import React from 'react'
import "./styleNavBar.css";
function Button(props) {
  return (
    <div>
      <button className="Button" style={{padding:props.padding, margin: props.margin}}>{props.icon}{props.title}</button>
    </div>
  );
}

export default Button