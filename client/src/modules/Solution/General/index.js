import React from "react"
import { Link } from "@reach/router"
import Image from "../../../components/Image";

export default function General(props) {
  return (
    <div className="General">
      <div className="general">
        <div className="general__content">
          <div className="divisions">
            <div className="divisions__next">
                    <div className="divisions-standalone">
                    <Image alt={`${props.name}.- front`} filename={`${props.img_A}.jpg`}></Image>
                      <button>{props.solution.solo_standev}</button>
                      
                    </div>
                    <div className="divisions-probox">
                      <button>{props.solution.solo_pbx}</button>
                    </div>
                    <div className="divisions-profnext">
                      <button>{props.solution.solo_profnext}</button>
                    </div>
            </div>
          </div>
          <div className="purposes">
            <div className="purposes__next">
              <div>
                <a href="http://www.profitt.ru" target="_blank" rel="noopener noreferrer">
                  <button> Profitt.ru</button>
                </a>
              </div>
              <div>
                <Link to="/solution/commutation">
                  <button>{props.solution.commutation}</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/fiber-system">
                  <button>{props.solution.fiber}</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/stream">
                  <button> {props.solution.stream}</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/mixing">
                  <button>{props.solution.mixing}</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/video">
                  <button>{props.solution.video}</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/audio">
                  <button> {props.solution.audio}</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/sync-system">
                  <button>{props.solution.syncSystem}</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/modul-system">
                  <button>{props.solution.modulSystem}</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/accessory">
                  <button>{props.solution.accessory}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
