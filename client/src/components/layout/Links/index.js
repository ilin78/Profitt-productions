import React from "react"
import { Link } from "@reach/router"

export default function Links(props) {
  return (
    <div className="navigate__link">
      <li>
        <div><Link to="/">{props.navigate.productions}</Link></div>
      </li>
      <li>
      <div><Link to="/app/solution">{props.navigate.solution}</Link></div>
      </li>
      {/* <li> */}
      {/* <div><Link to="/catalog">{props.navigate.catalog}</Link></div> */}
      {/* </li> */}
      <li>
      <div><Link to="/app/about">{props.navigate.about}</Link></div>
      </li>
      <li>
      <div><Link to="/app/support">{props.navigate.support}</Link></div>
      </li>
    </div>
  )
}
