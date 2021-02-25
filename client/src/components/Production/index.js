import React from "react"
import Device from "./Device"

export default class Production extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.navigate.productions}</h2>
        {this.props.devices.map((device, index) => {
          let id__style=index;
          return (
            <Device
              key={index}
              id__style={index}
              name={device.name}
              task={device.task}
              options={device.options}
            />
          )
        })}
      </div>
    )
  }
}