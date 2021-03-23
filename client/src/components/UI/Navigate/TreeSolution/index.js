import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import Language from "../../../layout/Layout/Header/Language";
import JSONData_ru from "../../../../../content/locales/ru/translation_ru.json";
import JSONData_en from "../../../../../content/locales/en/translation_en.json";

import "./TreeSolution.scss";

class TreeSolution extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState((state) => ({ open: !state.open }));
  };

  render() {
    let navigate = null;
    if (this.props.isLanguage) {
      navigate = JSONData_ru.ru[0].navigate;
    } else {
      navigate = JSONData_en.en[0].navigate;
    }

    return (
      <div className="TreeSolution">
        <ListItem onClick={this.handleClick}>
          <ListItemText inset primary={navigate.language} />
          {this.state.open ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={this.state.open}>
          <div className="buttonLeft">
            <Language />
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
