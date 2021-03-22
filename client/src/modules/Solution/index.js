import React from "react";
import { Router, Link } from "@reach/router";

import General from "./General";
import Commutation from "./Commutation";
import FiberSystem from "./FiberSystem";
import Stream from "./Stream";
import Mixing from "./Mixing";
import Video from "./Video";
import Audio from "./Audio";
import SyncSystem from "./SyncSystem";
import ModulSystem from "./ModulSystem";
import Accessory from "./Accessory";

import { connect } from "react-redux";
import JSONData_ru from "../../../content/locales/ru/translation_ru.json";
import JSONData_en from "../../../content/locales/en/translation_en.json";

import './style.scss'

function Solution({ isLanguage }) {
  
  let solution = null;
  if (isLanguage) {
    solution = JSONData_ru.ru[1].solution
  } else {
    solution = JSONData_en.en[1].solution;
  }

  return (
    <div className="Solutions">
      <div className="solution">
        <div className="solution__navbar">
          <a
            href="http://www.profitt.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Profitt.ru</button>
          </a>
          <Link to="/app/solution/commutation">
            <button>{solution.commutation}</button>
          </Link>
          <Link to="/app/solution/fiber-system">
            <button>{solution.fiber}</button>
          </Link>
          <Link to="/app/solution/stream">
            <button> {solution.stream}</button>
          </Link>
          <Link to="/app/solution/mixing">
            <button>{solution.mixing}</button>
          </Link>
          <Link to="/app/solution/video">
            <button>{solution.video}</button>
          </Link>
          <Link to="/app/solution/audio">
            <button> {solution.audio}</button>
          </Link>
          <Link to="/app/solution/sync-system">
            <button>{solution.syncSystem}</button>
          </Link>
          <Link to="/app/solution/modul-system">
            <button>{solution.modulSystem}</button>
          </Link>
          <Link to="/app/solution/accessory">
            <button>{solution.accessory}</button>
          </Link>
        </div>
        <div className="solution__content">
          <Router>
            <General path="/"  />
            <Commutation path="/commutation" />
            <FiberSystem path="/fiber-system" />
            <Stream path="/stream" />
            <Mixing path="/mixing" />
            <Video path="/video" />
            <Audio path="/audio" />
            <SyncSystem path="/sync-system" />
            <ModulSystem path="/modul-system" />
            <Accessory path="/accessory" />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(Solution);


