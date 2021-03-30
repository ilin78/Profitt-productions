import React from "react";
// import Image from "../../../components/Image";
import "./style.scss";
import LinksSolution from "../../../components/layout/Layout/Main/LinksSolution";

export default function General() {
  return (
    <div className="General">
      <div className="general">
        <div className="general__content">
          <div className="divisions">
            <div className="divisions__next">
              {/* <div className="divisions-standalone">
                <button>solo_standev</button>
              </div>
              <div className="divisions-probox">
                <button>solo_pbx</button>
              </div>
              <div className="divisions-profnext">
                <button>solo_profnext</button>
              </div> */}
            </div>
          </div>
       <div className="purposes">
            <div className="purposes__next">
              <LinksSolution />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
