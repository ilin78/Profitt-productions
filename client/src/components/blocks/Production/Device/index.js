import React from "react"

export default function Device(props) {
  return (
    <div className="blocks__devices">
      <div className={"blocks__devices_" + `${props.id__style}`}>
        <div className="blocks__devices_name">{props.name}</div>
        <p>{props.task}</p>
        <p>{props.options}</p>
      </div>
    </div>
  )
}
