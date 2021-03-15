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
          <a href="http://www.profitt.ru" target="_blank" rel="noopener noreferrer" >
            <button> Profitt.ru</button>
          </a>
          <Link to="/solution/commutation">
            <button>{props.solution.commutation}</button>
          </Link>
          <Link to="/solution/fiber-system">
            <button>{props.solution.fiber}</button>
          </Link>
          <Link to="/solution/stream">
            <button> {props.solution.stream}</button>
          </Link>
          <Link to="/solution/mixing">
            <button>{props.solution.mixing}</button>
          </Link>
          <Link to="/solution/video">
            <button>{props.solution.video}</button>
          </Link>
          <Link to="/solution/audio">
            <button> {props.solution.audio}</button>
          </Link>
          <Link to="/solution/sync-system">
            <button>{props.solution.syncSystem}</button>
          </Link>
          <Link to="/solution/modul-system">
            <button>{props.solution.modulSystem}</button>
          </Link>
          <Link to="/solution/accessory">
            <button>{props.solution.accessory}</button>
          </Link>
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
