import React from "react";
import { connect } from "react-redux";

import JSONList_devices_ru from "../../../../content/locales/ru/devices_ru.json";
import JSONList_devices_en from "../../../../content/locales/en/devices_en.json";
import ListItem from "../ListItem";

function FiberSystem({ isLanguage }) {
  let list_devices = null;
  if (isLanguage) {
    list_devices = JSONList_devices_ru.ru[0].list_devices;
  } else {
    list_devices = JSONList_devices_en.en[0].list_devices;
  }

  return (
    <div className="">
      {list_devices.map((list, index) => {
        if (list.div_fiber === "Eсть" || list.div_fiber === "Yes") {
          return (
            <div>
              <ListItem
                key={index}
                name={list.name}
                discription={list.discription}
              />
            </div>
          );
        } else {
          return
        }
      })}
    </div>
  );
}

export default connect(
  (state) => ({
    isLanguage: state.app.isLanguage,
  }),
  null
)(FiberSystem);
