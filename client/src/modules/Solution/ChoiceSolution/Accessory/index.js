import React from "react";

export default function Accessory(props) {
  return (
    <div className="Accessory">
      <div className="">
        <div className="">{props.name}</div>
        <div>{props.discription}</div>
      </div>
    </div>
  );
}
