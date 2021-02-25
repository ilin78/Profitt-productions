import React from "react";
import { Link } from "@reach/router";

export default function Links(props) {
  return (
    <div>
      <Link to="/"          >{props.navigate.productions}</Link>
      <Link to="/solution"  >{props.navigate.solution}</Link>
      <Link to="/catalog"   >{props.navigate.catalog}</Link>
      <Link to="/about"     >{props.navigate.about}</Link>
      <Link to="/support"   >{props.navigate.support}</Link>
    </div>
  )
}