import React from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";
import JSONData_en from "../../../../../../content/locales/en/translation_en.json";
import JSONData_ru from "../../../../../../content/locales/ru/translation_ru.json";

import "./Links.scss";

function Links({ isLanguage }) {
  let navigate = null;
  if (isLanguage) {
    navigate = JSONData_ru.ru[0].navigate;
  } else {
    navigate = JSONData_en.en[0].navigate;
  }
  return (
    <div>
      <nav className="navigate__link">
        {/* <Link to="/" activeClassName="headActive">
          <button> {navigate.productions} </button>
        </Link> */}
        <Link to="/solution/" activeClassName="headActive">
          <button> {navigate.solution} </button>
        </Link>
        <Link to="/support/" activeClassName="headActive">
          <button> {navigate.support} </button>
        </Link>
        <Link to="/about/" activeClassName="headActive">
          <button> {navigate.about} </button>
        </Link>
      </nav>
    </div>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(Links);
