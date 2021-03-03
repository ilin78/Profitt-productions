import React from "react"
import Device from "./Device"

export default class Production extends React.Component {

  render() {

    return (
      <div className="containerDevices">
        {this.props.devices.map((device, index) => {
          return (
            <div className={"containerDevices__" + index}>
              <Device
                key={index}
                idStyle={index}
                name={device.name}
                task={device.task}
                options={device.options}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
