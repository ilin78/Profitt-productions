import React from "react";
import { Link } from "@reach/router";

export default function Links(props) {
  return (
    <div>
      <Link to="/"          >{props.lang.productions}</Link>
      <Link to="/solution"  >{props.lang.solution}</Link>
      <Link to="/about"     >{props.lang.about}</Link>
      <Link to="/support"   >{props.lang.support}</Link>
    </div>
  )
}