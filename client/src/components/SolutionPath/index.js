import React from "react";
import { connect } from "react-redux";

import JSONList_devices_ru from "../../../content/locales/ru/devices_ru.json";
import JSONList_devices_en from "../../../content/locales/en/devices_en.json";
import ListItem from "./ListItem";

import "./SolutionPath.scss";
import Layout from "../layout/Layout";
import Solution from "../../modules/Solution";

function SolutionPath(props) {
  let list_devices = null;
  if (props.isLanguage) {
    list_devices = JSONList_devices_ru.ru[0].list_devices;
  } else {
    list_devices = JSONList_devices_en.en[0].list_devices;
  }
  let device;
  return (
    <Layout>
      <Solution>
        <div className="Category">
          <div className="Category__item">
            {list_devices.map((list, index) => {
              switch (props.dev) {
                case "div_commut": device = list.div_commut;
                  break;
                case "div_fiber": device = list.div_fiber;
                  break;
                case "div_stream": device = list.div_stream;
                  break;
                case "div_mixing": device = list.div_mixing;
                  break;
                case "div_video": device = list.div_video;
                  break;
                case "div_audio": device = list.div_audio;
                  break;
                case "div_sync": device = list.div_sync;
                  break;
                case "div_cam_chanel": device = list.div_cam_chanel;
                  break;
                case "div_asi_t2mi": device = list.div_asi_t2mi;
                  break;
                case "div_accessory": device = list.div_accessory;
                  break;
                case "div_modul": device = list.div_modul;
                  break;
                case "div_modul": device = list.div_modul;
                  break;
                case "div_multiview": device = list.div_multiview;
                  break;
               default:
                  return null;
              }
              if (device === "Eсть" || device === "Yes") {
                return (
                  <ListItem
                    key={index}
                    name={list.name}
                    discription={list.discription}
                    type={list.type}
                    link={list.link}
                    img_A={list.img_A}
                    img_B={list.img_B}
                    img_C={list.img_C}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </Solution>
    </Layout>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(SolutionPath);
