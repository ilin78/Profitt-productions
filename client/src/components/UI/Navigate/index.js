import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";

import "./Navigate.scss";

import TreeLanguage from "./TreeLanguage"
const useStyles = makeStyles({
  list: {
    width: 330,
  },
  fullList: {
    width: "auto",
  },
});

function Navigate({ children }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List className="Navigate__list">
        {/* <Divider /> */}
        <a
          href="http://www.profitt.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="siteProfitt">Profitt.ru</button>
        </a>

        {children}
        <div>
          <TreeLanguage />
          {/* <HomeOutlined /> - icon Home for */}
          {/* <BulbOutlined /> - icon for solution */}
          {/* <ToolOutlined /> - icon support */}
          {/* <TranslationOutlined />  - icon */}
          {/* <button>{navigate.language} <Language /></button> */}
        </div>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            {" "}
            <MenuIcon />
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default Navigate

     
  