import React from "react"
import { Link } from "@reach/router"

export default function General(props) {
  return (
    <div className="">
      <nav>
        <p>
          <a href="http://www.profitt.ru" target="_blank">
            Profitt.ru
          </a>
        </p>
        <p>
          <Link to="/solution/commutation"> {props.solution.commutation}</Link>
        </p>
        <p>
          <Link to="/solution/fiber-system"> {props.solution.fiber}</Link>
        </p>
        <p>
          <Link to="/solution/stream"> {props.solution.stream}</Link>
        </p>
        <p>
          <Link to="/solution/mixing"> {props.solution.mixing}</Link>
        </p>
        <p>
          <Link to="/solution/video"> {props.solution.video}</Link>
        </p>
        <p>
          <Link to="/solution/audio"> {props.solution.audio}</Link>
        </p>
        <p>
          <Link to="/solution/sync-system"> {props.solution.syncSystem}</Link>
        </p>
        <p>
          <Link to="/solution/modul-system"> {props.solution.modulSystem}</Link>
        </p>
        <p>
          <Link to="/solution/accessory"> {props.solution.accessory}</Link>
        </p>
      </nav>
    </div>
  )
}
