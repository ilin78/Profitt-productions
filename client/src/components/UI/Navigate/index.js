import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNewOutlined';
import { Link } from "gatsby";
import { connect } from "react-redux";
import JSONData_ru from "../../../../content/locales/ru/translation_ru.json";
import JSONData_en from "../../../../content/locales/en/translation_en.json";
import "./Navigate.scss";
import TreeLanguage from "./TreeLanguage";
import TreeSolution from "./TreeSolution";
const useStyles = makeStyles({
  list: {
    width: 330,
  },
  fullList: {
    width: "auto",
  },
});

function Navigate({ isLanguage }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  let navigate = null;
  if (isLanguage) {
    navigate = JSONData_ru.ru[0].navigate;
  } else {
    navigate = JSONData_en.en[0].navigate;
  }

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
          <button className="siteProfitt"><ImportantDevicesIcon/><div>Profitt.ru</div></button>
        </a>
        <div>
          <TreeLanguage />
        </div>
        <div>
          <nav className="navigate__link">
            <Link to="/">
              <button> <HomeOutlinedIcon /><div>{navigate.productions}</div>
                {/*  FiberNewOutlinedIcon - использовать в сл. появ. нового прод.  */}
                {/* <FiberNewOutlinedIcon color="secondary"/>  */}
              </button>
            </Link>
            <div>
              <TreeSolution />
            </div>
            <Link to="/support/">
              <button><ContactSupportOutlinedIcon /><div>{navigate.support}</div></button>
            </Link>
            <Link to="/about/">
              <button> <InfoOutlinedIcon /><div>{navigate.about}</div></button>
            </Link>
          </nav>
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
export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(Navigate);

/* <HomeOutlined /> - icon Home for */
/* <BulbOutlined /> - icon for solution */
/* <ToolOutlined /> - icon support */
/* <TranslationOutlined />  - icon */
/* <button>{navigate.language} <Language /></button> */
