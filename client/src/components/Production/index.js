import React from "react"
import Device from "./Device"
export default class Production extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <h2>{this.props.lang.productions}</h2>
        {this.props.devices.map((device, index) => {
          return (
            <Device
              key={index}
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
