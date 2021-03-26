import React from "react";
import { connect } from "react-redux";

import JSONList_devices_ru from "../../../../content/locales/ru/devices_ru.json";
import JSONList_devices_en from "../../../../content/locales/en/devices_en.json";
import CommutDevices from "./CommutDevices";

function Commutation({ isLanguage }) {
  let list_devices = null;
  if (isLanguage) {
    list_devices = JSONList_devices_ru.ru[0].list_devices;
  } else {
    list_devices = JSONList_devices_en.en[0].list_devices;
  }

  return (
    <div className="">
      {list_devices.map((accessory, index) => {
        if (accessory.div_commut === "Eсть" || accessory.div_commut === "Yes") {
          return (
            <div>
              <CommutDevices
                key={index}
                name={accessory.name}
                discription={accessory.discription}
              />
            </div>
          );
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
)(Commutation);
