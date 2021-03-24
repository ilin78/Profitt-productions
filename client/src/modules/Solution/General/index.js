import React from "react";
import { Link } from "gatsby";
// import Image from "../../../components/Image";

import "./style.scss";

export default function General() {
  return (
    <div className="General">
      <div className="general">
        <div className="general__content">
          <div className="divisions">
            <div className="divisions__next">
              <div className="divisions-standalone">
                <button>solo_standev</button>
              </div>
              <div className="divisions-probox">
                <button>solo_pbx</button>
              </div>
              <div className="divisions-profnext">
                <button>solo_profnext</button>
              </div>
            </div>
          </div>

       <div className="purposes">
            <div className="purposes__next">
            <div>
                <a href="http://www.profitt.ru" target="_blank">
                  <button> Profitt.ru</button>
                </a>
              </div>
               <div>
                <Link to="/solution/commutation">
                  <button>solution.commutation</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/fiber-system">
                  <button>solution.fiber</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/stream">
                  <button>solution.stream</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/mixing">
                  <button>solution.mixing</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/video">
                  <button>solution.video</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/audio">
                  <button> solution.audio</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/sync-system">
                  <button>solution.syncSystem</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/modul-system">
                  <button>solution.modulSystem</button>
                </Link>
              </div>
              <div>
                <Link to="/solution/accessory">
                  <button>solution.accessory</button>
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
