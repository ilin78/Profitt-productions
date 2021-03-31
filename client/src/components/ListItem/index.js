
import React from "react";
import { Link } from "gatsby";
import "./ListItem.scss";

export default function ListItem(props) {
  return (
    <Link to={props.link}>
      <div className="ListItem">
        <button className="ListItem__btn">
          <div className="ListItem__container">
            <div className="ListItem__container_type">{props.type}</div>
            <div className="ListItem__container_img"></div>
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
