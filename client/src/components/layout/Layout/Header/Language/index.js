import React from "react";
import { connect } from "react-redux";
import { toggleLanguage } from "../../../../../state/app";

function Landuage({ isLanguage, dispatch, props }) {
  return (
    <div>
        <button onClick={() => dispatch(toggleLanguage(!isLanguage))}> {props} {isLanguage ? "Ru" : "Eng"} </button>
    </div>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(Landuage);
