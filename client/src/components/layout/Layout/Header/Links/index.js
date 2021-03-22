import React from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";
import JSONData_en from "../../../../../../content/locales/en/translation_en.json";
import JSONData_ru from "../../../../../../content/locales/ru/translation_ru.json";

function Links({ isLanguage }) {
  let navigate = null;
  if (isLanguage) {
    navigate = JSONData_ru.ru[0].navigate;
  } else {
    navigate = JSONData_en.en[0].navigate;
  }
  return (
    <nav className="navigate__link">
      <Link to="/"><button> {navigate.productions} </button></Link>
      <Link to="/solution/"><button> {navigate.solution} </button></Link>
      <Link to="/support/"><button> {navigate.support} </button></Link>
      <Link to="/about/"><button> {navigate.about} </button></Link>
    </nav>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(Links);