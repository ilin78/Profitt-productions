import React from "react";
import { connect } from "react-redux";

import JSONData_ru from "../../../content/locales/ru/translation_ru.json";
import JSONData_en from "../../../content/locales/en/translation_en.json";

import './style.scss'

const NotFound = ({ isLanguage }) => {
  let notfound = null;
  if (isLanguage) {
    notfound = JSONData_ru.ru[2].notfound;
  } else {
    notfound = JSONData_en.en[2].notfound;
  }

  return (
    <div className="Notfound">
      <h1>{notfound.title}</h1>
      <h1>{notfound.body}</h1>
      <p>{notfound.notfound}</p>
    </div>
  )
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(NotFound);
