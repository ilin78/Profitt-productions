import React from "react";
import { Link } from "gatsby";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from "react-redux";
import JSONData_ru from "../../../../../content/locales/ru/translation_ru.json";
import JSONData_en from "../../../../../content/locales/en/translation_en.json";
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SyncAltRoundedIcon from '@material-ui/icons/SyncAltRounded';
import SwitchVideoOutlinedIcon from '@material-ui/icons/SwitchVideoOutlined';
import FourKOutlinedIcon from '@material-ui/icons/FourKOutlined';
import MergeTypeOutlinedIcon from '@material-ui/icons/MergeTypeOutlined';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
import SettingsEthernetOutlinedIcon from '@material-ui/icons/SettingsEthernetOutlined';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import QueueOutlinedIcon from '@material-ui/icons/QueueOutlined';
import CallSplitOutlinedIcon from '@material-ui/icons/CallSplitOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';

import "./TreeSolution.scss";

class TreeSolution extends React.Component {
  state = {
    open: false,
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
        <ListItem className="ListButton" onClick={this.handleClick}>
        <ExploreOutlinedIcon /><ListItemText inset primary={navigate.solution} />
        {this.state.open ? < RemoveIcon /> : <AddIcon />}
        </ListItem>
        <Collapse in={this.state.open}>
          <div className="buttonLeft">
          <Link to="/solution/commutation">
            <button><CallSplitOutlinedIcon />{solution.commutation}</button>
          </Link>
          <Link to="/solution/fiber">
            <button><SettingsEthernetOutlinedIcon/>{solution.fiber}</button>
          </Link>
          <Link to="/solution/stream">
            <button> <FilterDramaOutlinedIcon/>{solution.stream}</button>
          </Link>
          <Link to="/solution/mixing">
            <button>
              <ShuffleOutlinedIcon />
              {/* <SwitchVideoOutlinedIcon /> */}
              {solution.mixing}</button>
          </Link>
          <Link to="/solution/video">
            <button><LiveTvOutlinedIcon /> {solution.video}</button>
          </Link>
          <Link to="/solution/audio">
            <button> <GraphicEqOutlinedIcon />
              {solution.audio}</button>
          </Link>
          <Link to="/solution/sync-system">
            <button><SyncAltRoundedIcon/>{solution.syncSystem}</button>
          </Link>
          <Link to="/solution/modul-system">
            <button>
              {/* <CategoryOutlinedIcon /> */}
            <DonutSmallOutlinedIcon />
            {solution.modulSystem}</button>
          </Link>
          <Link to="/solution/accessory">
            <button><QueueOutlinedIcon />{solution.accessory}</button>
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
