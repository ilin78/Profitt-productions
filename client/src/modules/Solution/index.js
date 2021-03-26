import React from "react";
import General from "../Solution/General"
import "./style.scss";
import LinksSolution from "../../components/layout/Layout/Main/LinksSolution";

export default function Solution({ children }) {
  function stateChildren() {
    return (children === undefined ? <General /> : children)
  }
  return (
    <div className="Solutions">
      <div className="solution">
        <div className="solution__navbar">
         <LinksSolution />
        </div>
        <div className="solution__content">
          {stateChildren()}
        </div>
      </div>
    </div>
  );
}
