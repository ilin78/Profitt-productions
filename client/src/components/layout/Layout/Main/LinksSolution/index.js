import React from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";
import JSONData_ru from "../../../../../../content/locales/ru/translation_ru.json";
import JSONData_en from "../../../../../../content/locales/en/translation_en.json";


function LinksSolution({ isLanguage }) {
  let solution = null;
  if (isLanguage) {
    solution = JSONData_ru.ru[1].solution;
  } else {
    solution = JSONData_en.en[1].solution;
  }

  return (
        <div className="">
          <a
            href="http://www.profitt.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Profitt.ru</button>
          </a>
          <Link to="/solution/commutation">
            <button>{solution.commutation}</button>
          </Link>
          <Link to="/solution/fiber">
            <button>{solution.fiber}</button>
          </Link>
          <Link to="/solution/stream">
            <button> {solution.stream}</button>
          </Link>
          <Link to="/solution/mixing">
            <button>{solution.mixing}</button>
          </Link>
          <Link to="/solution/video">
            <button>{solution.video}</button>
          </Link>
          <Link to="/solution/audio">
            <button> {solution.audio}</button>
          </Link>
          <Link to="/solution/sync-system">
            <button>{solution.syncSystem}</button>
          </Link>
          <Link to="/solution/modul-system">
            <button>{solution.modulSystem}</button>
          </Link>
          <Link to="/solution/accessory">
            <button>{solution.accessory}</button>
          </Link>
        </div>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(LinksSolution);
