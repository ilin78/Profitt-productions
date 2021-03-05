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
                name={device.name}
                task={device.task}
                options={device.options}
                other={device.other}
                img_A={device.img_A}
                img_B={device.img_B}
                img_C={device.img_C}
                link={device.link}
              />
            </div>
          )
        })}
      </div>
    )
  }
}