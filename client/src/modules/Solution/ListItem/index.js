import React from "react";

import "./ListItem.scss"
export default function ListItem(props) {
  return (
    <div className="ListItem">
      <div className="ListItem__container">
        <div className="">{props.name}</div>
        <div> {props.discription}</div>
      </div>
    </div>
  );
}
