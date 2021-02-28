import React from "react";
import { Link } from "@reach/router";

export default function Links(props) {
  return (
    <div className="navigate__link">
      <li><Link to="/"          >{props.navigate.productions}</Link></li>
      <li><Link to="/solution"  >{props.navigate.solution}</Link></li>
      <li><Link to="/catalog"   >{props.navigate.catalog}</Link></li>
      <li><Link to="/about"     >{props.navigate.about}</Link></li>
      <li><Link to="/support"   >{props.navigate.support}</Link></li>
    </div>
  )
}