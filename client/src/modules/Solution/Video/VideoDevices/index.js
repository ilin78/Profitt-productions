import React from "react";

export default function AccessDevices(props) {
  return (
    <div className="AccessDevices">
      <div className="">
        <div className="">{props.name}</div>
        <div> {props.discription}</div>
      </div>
    </div>
  );
}
