import React from "react";

export default function ListItem(props) {
  return (
    <div className="ListItem">
      <div className="">
        <div className="">{props.name}</div>
        <div> {props.discription}</div>
      </div>
    </div>
  );
}
