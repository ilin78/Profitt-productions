import React from "react"
import { Router, Link } from "@reach/router"

import General from "./General"
import Commutation from "./Commutation"
import FiberSystem from "./FiberSystem"
import Stream from "./Stream"
import Mixing from "./Mixing"
import Video from "./Video"
import Audio from "./Audio"
import SyncSystem from "./SyncSystem"
import ModulSystem from "./ModulSystem"
import Accessory from "./Accessory"

export default function Solution(props) {
  return (
    <div className="Solutions">
      <div className="solution">
        <div className="solution__navbar">
          <nav>
            <p>
              <a href="http://www.profitt.ru" target="_blank">
                Profitt.ru
              </a>
            </p>
            <p>
              <Link to="/solution/commutation">
                {" "}
                {props.solution.commutation}
              </Link>
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
              <Link to="/solution/sync-system">
                {" "}
                {props.solution.syncSystem}
              </Link>
            </p>
            <p>
              <Link to="/solution/modul-system">
                {" "}
                {props.solution.modulSystem}
              </Link>
            </p>
            <p>
              <Link to="/solution/accessory"> {props.solution.accessory}</Link>
            </p>
          </nav>
        </div>
        <div className="solution__content">
          <Router>
            <General path="/" solution={props.solution} />
            <Commutation path="/commutation" solution={props.solution} />
            <FiberSystem path="/fiber-system" solution={props.solution} />
            <Stream path="/stream" solution={props.solution} />
            <Mixing path="/mixing" solution={props.solution} />
            <Video path="/video" solution={props.solution} />
            <Audio path="/audio" solution={props.solution} />
            <SyncSystem path="/sync-system" solution={props.solution} />
            <ModulSystem path="/modul-system" solution={props.solution} />
            <Accessory path="/accessory" solution={props.solution} />
          </Router>
        </div>
      </div>
    </div>
  )
}
