import React from "react";
import { connect } from "react-redux";

import JSONList_devices_ru from "../../../../../content/locales/ru/devices_ru.json";
import JSONList_devices_en from "../../../../../content/locales/en/devices_en.json";
import ListItem from "../../../../components/ListItem";

import "../Category.scss";

function Video({ isLanguage }) {
  let list_devices = null;
  if (isLanguage) {
    list_devices = JSONList_devices_ru.ru[0].list_devices;
  } else {
    list_devices = JSONList_devices_en.en[0].list_devices;
  }

  return (
    <div className="Category">
      <div className="Category__item">
        {list_devices.map((list, index) => {
          if (list.div_video === "Eсть" || list.div_video === "Yes") {
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
        })} <div className="Category__footer"></div>
      </div>
     
    </div>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(Video);
