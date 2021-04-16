import React from "react";
import Solution from "../../modules/Solution";
import Layout from "../layout/Layout";
import "./PageTamplate.scss";
import { connect } from "react-redux";
import ItemInfo from "./ItemInfo";
import JSONInfo_ru from "../../../content/locales/ru/info_device_ru.json";
import JSONInfo_en from "../../../content/locales/en/info_device_en.json";

function PageTamplate(props) {
  let data,
    headers = null;
  if (props.isLanguage) {
    headers = JSONInfo_ru.ru[0].headers;
    data = JSONInfo_ru.ru[1].info_devices;
  } else {
    headers = JSONInfo_en.en[0].headers;
    data = JSONInfo_en.en[1].info_devices;
  }

  return (
    <Layout>
      <Solution>
        <div>
          <div>
            {data.map((info, index) => {
              if (info.id === props.id) {
                return (
                  <ItemInfo
                    key={index}
                    // Заголовки 
                    specifications={headers.specifications}
                    applying={headers.applying}
                    positive={headers.positive}
                    code_order={headers.code_order}
                    order={headers.order}
                    properties={headers.properties}
                    descript_short={headers.descript_short}
                    description={headers.description}
                    
                    type={info.type}
                    name={info.name}
                    definition={info.definition}
                    name2={info.name_2}
                    // ОПИСАНИЕ 1 АБЗАЦ
                    description_1={info.description_1}
                    description_2={info.description_2}
                    description_3={info.description_3}
                    description_4={info.description_4}

                    // ФОТО
                    img_1={info.img_1}
                    img_2={info.img_2}
                    img_3={info.img_3}
                    img_4={info.img_4}
                    img_5={info.img_5}
                    img_6={info.img_6}
                    // ОПИСАНИЕ К ФОТО
                    img_label_1={info.img_label_1}
                    img_label_2={info.img_label_2}
                    img_label_3={info.img_label_3}
                    img_label_4={info.img_label_4}
                    img_label_5={info.img_label_5}
                    img_label_6={info.img_label_6}

                    // СВОЙСТВО
                    properties_1={info.properties_1}
                    properties_2={info.properties_2}
                    properties_3={info.properties_3}
                    properties_4={info.properties_4}
                    // ХАРАКТЕРИСТИКА
                    specifications_1={info.specifications_1}
                    item_1_1={info.item_1_1}
                    item_1_2={info.item_1_2}
                    item_1_3={info.item_1_3}
                    item_1_4={info.item_1_4}
                    item_1_5={info.item_1_5}
                    item_1_6={info.item_1_6}
                    specifications_2={info.specifications_2}
                    item_2_1={info.item_2_1}
                    item_2_2={info.item_2_2}
                    item_2_3={info.item_2_3}
                    item_2_4={info.item_2_4}
                    item_2_5={info.item_2_5}
                    item_2_6={info.item_2_6}
                    specifications_3={info.specifications_3}
                    item_3_1={info.item_3_1}
                    item_3_2={info.item_3_2}
                    item_3_3={info.item_3_3}
                    item_3_4={info.item_3_4}
                    item_3_5={info.item_3_5}
                    item_3_6={info.item_3_6}
                    specifications_4={info.specifications_4}
                    item_4_1={info.item_4_1}
                    item_4_2={info.item_4_2}
                    item_4_3={info.item_4_3}
                    item_4_4={info.item_4_4}
                    item_4_5={info.item_4_5}
                    item_4_6={info.item_4_6}
                    specifications_5={info.specifications_5}
                    item_5_1={info.item_5_1}
                    item_5_2={info.item_5_2}
                    item_5_3={info.item_5_3}
                    item_5_4={info.item_5_4}
                    item_5_5={info.item_5_5}
                    item_5_6={info.item_5_6}
                    specifications_6={info.specifications_6}
                    item_6_1={info.item_6_1}
                    item_6_2={info.item_6_2}
                    item_6_3={info.item_6_3}
                    item_6_4={info.item_6_4}
                    item_6_5={info.item_6_5}
                    item_6_6={info.item_6_6}
                    // ПРИМИНЕНИЕ
                    applying_1={info.applying_1}
                    applying_2={info.applying_2}
                    applying_3={info.applying_3}
                    applying_4={info.applying_4}
                    applying_5={info.applying_5}
                    applying_6={info.applying_6}
                    // ПРЕЙМУЩЕСТВА
                    positive_1={info.positive_1}
                    positive_2={info.positive_2}
                    positive_3={info.positive_3}
                    positive_4={info.positive_4}
                    positive_5={info.positive_5}
                    positive_6={info.positive_6}
                    positive_7={info.positive_7}
                    positive_8={info.positive_8}
                    positive_9={info.positive_9}
                    positive_10={info.positive_10}
                    // Код для заказа
                    code_order_1={info.code_order_1}
                    code_order_2={info.code_order_2}
                    code_order_3={info.code_order_3}
                    code_order_4={info.code_order_4}
                    // Описание кода
                    option_1={info.option_1}
                    option_2={info.option_2}
                    option_3={info.option_3}
                    option_4={info.option_4}
                    // Ссылка на документацию
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
