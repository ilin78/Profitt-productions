import React from "react";
import Image from "../../../components/Image";
import { Link } from "gatsby";

export default function ListDevice(props) {
  return (
    <div className="Production">
      <div className="blocks">
        <div className="blocks__devices">
          <div className="blocks__devices_name">{props.name}</div>
          <div className="blocks__devices_discription">
            <div className="blocks__devices_discription-task">{props.task}</div>
            <div className="blocks__devices_discription-options">
              {props.options}
            </div>
            <div className="blocks__devices_discription-other">
              {props.other}
            </div>
            {/* <div className="blocks__devices_discription-link">{props.link}</div> */}
            <Link to={props.link}>
            <div className="learn-btn">
              <button >{props.info}</button>
            </div>
            </Link>
          </div>
        </div>
        <div className="blocks__image">
          <div className="blocks__image_view">
            <div className="blocks__image_view-A">
              <Image
                alt={`${props.name}.- front`}
                filename={`${props.img_A}.jpg`}
              />
            </div>
            <div className="blocks__image_view-B">
              <Image
                alt={`${props.name}- back`}
                filename={`${props.img_B}.jpg`}
              />
            </div>
            <div className="blocks__image_view-C">
              <Image
                alt={`${props.name}- common`}
                filename={`${props.img_C}.jpg`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
