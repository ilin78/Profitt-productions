import React from "react";
import Navigate from "../../../UI/Navigate";
import Landuage from "./Language";
import Links from "./Links";

import "./style.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header__container">
        <div className="Header__container_nav">
          <Navigate> 
            <Links /> 
          </Navigate >
        </div>
        <div>
          <logo className="Header__container_logo">PROFI<span>TT</span></logo>
        </div>
        <div className="Header__container_list">
          <Links />
        </div>
        <div className="Header__container_lang">
          <Landuage />
        </div>
      </div>
    </div>
  );
}
