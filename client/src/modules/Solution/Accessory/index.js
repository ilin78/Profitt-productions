import React from "react";
import { connect } from "react-redux";

import JSONList_devices_ru from "../../../../content/locales/ru/devices_ru.json";
import JSONList_devices_en from "../../../../content/locales/en/devices_en.json";
import AccessDevices from "./AccessDevices";

function Accessory({ isLanguage }) {
  let list_devices = null;
  if (isLanguage) {
    list_devices = JSONList_devices_ru.ru[0].list_devices;
  } else {
    list_devices = JSONList_devices_en.en[0].list_devices;
  }

  return (
    <div className="">
      {list_devices.map((accessory, index) => {
        if (accessory.div_access === "Eсть" || accessory.div_access === "Yes") {
          return (
            <div>
              <AccessDevices
                key={index}
                name={accessory.name}
                discription={accessory.discription}
              />
            </div>
          );
        } else {
          return (
          <div> Not found </div>
          )
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
)(Accessory);
