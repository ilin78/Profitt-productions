import React from "react";
import { connect } from "react-redux";
import { toggleLanguage } from "../../../../../state/app";

function Landuage({ isLanguage, dispatch }) {
  return (
    <div>
        <button onClick={() => dispatch(toggleLanguage(!isLanguage))}> {isLanguage ? "RUS" : "ENG"} </button>
    </div>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(Landuage);
