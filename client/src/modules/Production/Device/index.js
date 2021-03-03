import React from "react"

export default function Device(props) {
  return (
    <div className="blocks">
      <div className="blocks__devices">
        <div className={"blocks__devices_" + props.idStyle}>
          <div className="blocks__devices_name">{props.name}</div>
          <div className="blocks__devices_discription">
            <div className="blocks__devices_discription-task">{props.task}</div>
            <div className="blocks__devices_discription-options">{props.options}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
