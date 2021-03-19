import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { connect } from "react-redux";
import { toggleLanguage } from "../../../state/app";

function Layout({ isLanguage, dispatch, children }) {
  return (
    <div>
      <header>
        <div main="role">
          <Helmet title="tv.profitt.ru" />
        </div>
        <button onClick={() => dispatch(toggleLanguage(!isLanguage))}>
          {isLanguage ? "RUS" : "ENG"}
        </button>
        <Link to="/"><button>Products</button></Link>
        {"   "}
        <Link to="/solution/"><button>Solutions</button></Link>
        {"   "}
        <Link to="/support/"><button>Support</button></Link>
        {"   "}
        <Link to="/about/"><button>About</button></Link>
      </header>
      <main className="App__layout">{children}</main>
    </div>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(Layout);
