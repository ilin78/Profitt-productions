import React from "react";

export default function AudioDevices(props) {
  return (
    <div className="AudioDevices">
      <div className="">
        <div className="">{props.name}</div>
        <div> {props.discription}</div>
      </div>
    </div>
  );
}
