import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => (
  <div main="role">
    <Helmet title="tv.profitt.ru" />
    <header>
      <main>{children}</main>
    </header>
  </div>
)

export default Layout;

/*

import React, { useState } from "react"
import { Link } from "gatsby"
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, List } from '@material-ui/core/';
import "./layout.scss";
import JSONData from "../../content/locales/translation.json"
// import Productions from "../pages/Productions"
import Solution from "../pages/solution.js"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout(props) {

  const [isLanguge, setLanguge] = useState(true);
  function toggleLanguage() {

    setLanguge(prev => !prev)

  }



  let LANGUAGE;
  if (isLanguge) {
    LANGUAGE = JSONData.ru[0];
  } else {
    LANGUAGE = JSONData.en[0];
  }

  const [state, setState] = React.useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ul className="nav-links">
          <ListLink to="/">{LANGUAGE.productions}</ListLink>
          <ListLink to="/solution/">{LANGUAGE.solution}</ListLink>
          <ListLink to="/about/">{LANGUAGE.about}</ListLink>
          <ListLink to="/support/">{LANGUAGE.support}</ListLink>
        </ul>
        <button
          onClick={toggleLanguage}>{isLanguge ? <>RU</> : <>EN</>}</button>
      </List>
    </div>
  );

  return (
    <div className="wrapper">
      <div className="logo">
        <h4>PROFITT</h4>
      </div>

      <div className="header__list">
        {list()}
      </div>
      <div className="mobile__list">
        {
          ['top'].map((anchor) => (
            <React.Fragment key={anchor}>
              <MenuIcon onClick={toggleDrawer(anchor, true)} />
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))
        }


      </div>
      <Solution title={'I am from props!'} />
      {/* <Solution name={LANGUAGE.solution} /> */}
      /*{props.children}
    </div>
  )
}

*/ 