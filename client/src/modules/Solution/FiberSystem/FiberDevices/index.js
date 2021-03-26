import React from "react";

export default function FiberDevices(props) {
  return (
    <div className="FiberDevices">
      <div className="">
        <div className="">{props.name}</div>
        <div> {props.discription}</div>
      </div>
    </div>
  );
}


