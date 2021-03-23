import React from "react";
import { Router, Link } from "@reach/router";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";

import Language from "../../../layout/Layout/Header/Language";

import JSONData_ru from "../../../../../content/locales/ru/translation_ru.json";
import JSONData_en from "../../../../../content/locales/en/translation_en.json";

import General from "../../../../modules/Solution/General";
import Commutation from "../../../../modules/Solution/Commutation";
import FiberSystem from "../../../../modules/Solution/FiberSystem";
import Stream from "../../../../modules/Solution/Stream";
import Mixing from "../../../../modules/Solution/Mixing";
import Video from "../../../../modules/Solution/Video";
import Audio from "../../../../modules/Solution/Audio";
import SyncSystem from "../../../../modules/Solution/SyncSystem";
import ModulSystem from "../../../../modules/Solution/ModulSystem";
import Accessory from "../../../../modules/Solution/Accessory";

import "./TreeSolution.scss";

class TreeSolution extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState((state) => ({ open: !state.open }));
  };

  render() {
    let navigate, solution = null; 
    if (this.props.isLanguage) {
      navigate = JSONData_ru.ru[0].navigate;
      solution = JSONData_ru.ru[1].solution
    } else {
      navigate = JSONData_en.en[0].navigate;
      solution = JSONData_en.en[1].solution;
    }

    return (
      <div className="TreeSolution">
        <ListItem onClick={this.handleClick}>
           <ListItemText inset primary={navigate.solution} />
          {this.state.open ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={this.state.open}>
          <div className="buttonLeft">
          <Link to="/app/solution/commutation">
            <button>{solution.commutation}</button>
          </Link>
          <Link to="/app/solution/fiber-system">
            <button>{solution.fiber}</button>
          </Link>
          <Link to="/app/solution/stream">
            <button> {solution.stream}</button>
          </Link>
          <Link to="/app/solution/mixing">
            <button>{solution.mixing}</button>
          </Link>
          <Link to="/app/solution/video">
            <button>{solution.video}</button>
          </Link>
          <Link to="/app/solution/audio">
            <button> {solution.audio}</button>
          </Link>
          <Link to="/app/solution/sync-system">
            <button>{solution.syncSystem}</button>
          </Link>
          <Link to="/app/solution/modul-system">
            <button>{solution.modulSystem}</button>
          </Link>
          <Link to="/app/solution/accessory">
            <button>{solution.accessory}</button>
          </Link>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default connect(
  (state) => ({ isLanguage: state.app.isLanguage }),
  null
)(TreeSolution);
