import React from "react";
import Solution from "../../modules/Solution";
import Layout from "../layout/Layout";
import "./PageTamplate.scss";
import { connect } from "react-redux";
import ItemInfo from "./ItemInfo"
import JSONInfo_ru from "../../../content/locales/ru/info_device_ru.json";
import JSONInfo_en from "../../../content/locales/en/info_device_en.json";

function PageTamplate(props) {
  let info_devices = null;
  if (props.isLanguage) {
    info_devices = JSONInfo_ru.ru[0].info_devices;
  } else {
    info_devices = JSONInfo_en.en[0].info_devices;
  }
  console.log(props)
  return (
    <Layout>
      <Solution>
        <div>
          <div>
            {info_devices.map((info, index) => {
              if (info.id === props.id) {
                return (
                  <ItemInfo
                    key={index}
                    name={info.name}
                    discription={info.discription}
                    type={info.type}
                    link={info.link}
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
)(PageTamplate);
