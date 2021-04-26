import React from "react";
import { Link } from "gatsby";
import "./ListItem.scss";
import MinImage from "../../MinImage";

export default function ListItem(props) {
  return (
    <Link to={props.link}>
      <div className="ListItem">
        <button className="ListItem__btn">
          <div className="ListItem__container">
            <div className="ListItem__container_type">{props.type}</div>
            <div className="ListItem__container_image">
              <div className="viewImage">
                <div className="viewImage_A">
                  <MinImage
                    alt={`${props.img_A}.- front`}
                    filename={`${props.img_A}.jpg`}
                  />
                </div>
              </div>
            </div>
            <div className="ListItem__container_name">{props.name}</div>
            <div className="ListItem__container_discription">
              {props.discription}
            </div>
          </div>
        </button>
      </div>
    </Link>
  );
}
