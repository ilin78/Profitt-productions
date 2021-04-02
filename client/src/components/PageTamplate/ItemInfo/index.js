import React from "react";
import "./ItemInfo.scss";
export default function ItemInfo(props) {
  return (
    <div className="ItemInfo">
      <div>
        <div className="ItemInfo__content padd">
          <div>{props.type}</div>
          <div className="ItemInfo__header">{props.name2}</div>
          <div className="ItemInfo__image"></div>
          <div className="ItemInfo__descriptshort padd">
            <div className="ItemInfo__descriptshort_name">{props.name}</div>
            <div className="ItemInfo__descriptshort_name-text">
              {props.definition}
            </div>
          </div>
          <div className="ItemInfo__description padd">
            <div className="ItemInfo__header">{props.description}</div>
            <div className="ItemInfo__description-1">{props.description_1}</div>
            <div className="ItemInfo__description-2">{props.description_2}</div>
            <div className="ItemInfo__description-3">{props.description_3}</div>
            <div className="ItemInfo__description-4">{props.description_4}</div>
          </div>
          <div className="ItemInfo__properties padd">
            <div className="ItemInfo__header">{props.properties}</div>
            <div className="ItemInfo__properties-1">{props.properties_1}</div>
            <div className="ItemInfo__properties-2">{props.properties_2}</div>
            <div className="ItemInfo__properties-3">{props.properties_3}</div>
            <div className="ItemInfo__properties-4">{props.properties_4}</div>
          </div>
          <div className="ItemInfo__specifications padd">
            <div className="ItemInfo__header">{props.specifications}</div>
            <div className="ItemInfo__specifications-header">
              {props.specifications_1}
            </div>
            <div className="ItemInfo__spec_item">{props.item_1_1}</div>
            <div className="ItemInfo__spec_item">{props.item_1_2}</div>
            <div className="ItemInfo__spec_item">{props.item_1_3}</div>
            <div className="ItemInfo__spec_item">{props.item_1_4}</div>
            <div className="ItemInfo__spec_item">{props.item_1_5}</div>
            <div className="ItemInfo__spec_item">{props.item_1_6}</div>
            <div className="ItemInfo__specifications-header">
              {props.specifications_2}
            </div>
            <div className="ItemInfo__spec_item">{props.item_2_1}</div>
            <div className="ItemInfo__spec_item">{props.item_2_2}</div>
            <div className="ItemInfo__spec_item">{props.item_2_3}</div>
            <div className="ItemInfo__spec_item">{props.item_2_4}</div>
            <div className="ItemInfo__spec_item">{props.item_2_5}</div>
            <div className="ItemInfo__spec_item">{props.item_2_6}</div>
            <div className="ItemInfo__specifications-header">
              {props.specifications_3}
            </div>
            <div className="ItemInfo__spec_item">{props.item_3_1}</div>
            <div className="ItemInfo__spec_item">{props.item_3_2}</div>
            <div className="ItemInfo__spec_item">{props.item_3_3}</div>
            <div className="ItemInfo__spec_item">{props.item_3_4}</div>
            <div className="ItemInfo__spec_item">{props.item_3_5}</div>
            <div className="ItemInfo__spec_item">{props.item_3_6}</div>
            <div className="ItemInfo__specifications-header">
              {props.specifications_4}
            </div>
            <div className="ItemInfo__spec_item">{props.item_4_1}</div>
            <div className="ItemInfo__spec_item">{props.item_4_2}</div>
            <div className="ItemInfo__spec_item">{props.item_4_3}</div>
            <div className="ItemInfo__spec_item">{props.item_4_4}</div>
            <div className="ItemInfo__spec_item">{props.item_4_5}</div>
            <div className="ItemInfo__spec_item">{props.item_4_6}</div>
            <div className="ItemInfo__specifications-header">
              {props.specifications_5}
            </div>
            <div className="ItemInfo__spec_item">{props.item_5_1}</div>
            <div className="ItemInfo__spec_item">{props.item_5_2}</div>
            <div className="ItemInfo__spec_item">{props.item_5_3}</div>
            <div className="ItemInfo__spec_item">{props.item_5_4}</div>
            <div className="ItemInfo__spec_item">{props.item_5_5}</div>
            <div className="ItemInfo__spec_item">{props.item_5_6}</div>
            <div className="ItemInfo__specifications-header">
              {props.specifications_6}
            </div>
            <div className="ItemInfo__spec_item">{props.item_6_1}</div>
            <div className="ItemInfo__spec_item">{props.item_6_2}</div>
            <div className="ItemInfo__spec_item">{props.item_6_3}</div>
            <div className="ItemInfo__spec_item">{props.item_6_4}</div>
            <div className="ItemInfo__spec_item">{props.item_6_5}</div>
            <div className="ItemInfo__spec_item">{props.item_6_6}</div>
          </div>
          <div className="ItemInfo__applying padd">
            <div className="ItemInfo__header">{props.applying}</div>
            <div className="ItemInfo__appl_item">{props.applying_1}</div>
            <div className="ItemInfo__appl_item">{props.applying_2}</div>
            <div className="ItemInfo__appl_item">{props.applying_3}</div>
            <div className="ItemInfo__appl_item">{props.applying_4}</div>
            <div className="ItemInfo__appl_item">{props.applying_5}</div>
            <div className="ItemInfo__appl_item">{props.applying_6}</div>
          </div>
          <div>
            <div className="ItemInfo__positive padd">
              <div className="ItemInfo__header">{props.positive}</div>
              <div className="ItemInfo__pos_item">{props.positive_1}</div>
              <div className="ItemInfo__pos_item">{props.positive_2}</div>
              <div className="ItemInfo__pos_item">{props.positive_3}</div>
              <div className="ItemInfo__pos_item">{props.positive_4}</div>
              <div className="ItemInfo__pos_item">{props.positive_5}</div>
              <div className="ItemInfo__pos_item">{props.positive_6}</div>
              <div className="ItemInfo__pos_item">{props.positive_7}</div>
              <div className="ItemInfo__pos_item">{props.positive_8}</div>
              <div className="ItemInfo__pos_item">{props.positive_9}</div>
              <div className="ItemInfo__pos_item">{props.positive_10}</div>
            </div>
          </div>
          <div className="ItemInfo__code padd">
            <div className="ItemInfo__header">{props.order}</div>
            <div className="ItemInfo__code_header">{props.code_order}</div>
            <div>
              <div className="ItemInfo__code_item">{props.code_order_1}</div>
              <div className="ItemInfo__code_text">{props.option_1}</div>
            </div>
            <div>
              <div className="ItemInfo__code_item">{props.code_order_2}</div>
              <div className="ItemInfo__code_text">{props.option_2}</div>
            </div>
            <div>
              <div className="ItemInfo__code_item">{props.code_order_3}</div>
              <div className="ItemInfo__code_text">{props.option_3}</div>
            </div>
            <div>
              <div className="ItemInfo__code_item">{props.code_order_4}</div>
              <div className="ItemInfo__code_text">{props.option_4}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
