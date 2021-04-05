import React from "react";
import "./ItemInfo.scss";
export default function ItemInfo(props) {
  return (
    <div className="ItemInfo">
      <div>
        <div className="ItemInfo__content padd">
          <div className="ItemInfo__type">{props.type}</div>
          <div className="ItemInfo__header">{props.name2}</div>
          <div className="ItemInfo__image"></div>
          <div className="ItemInfo__descriptshort padd">
            <div className="ItemInfo__descriptshort_name">{props.name}</div>
            <div className="ItemInfo__descriptshort_text">
              {props.definition}
            </div>
          </div>
          <div className="ItemInfo__description padd">
            <div className="ItemInfo__header">{props.description}</div>
            <div className="ItemInfo__description_item">{props.description_1}</div>
            <div className="ItemInfo__description_item">{props.description_2}</div>
            <div className="ItemInfo__description_item">{props.description_3}</div>
            <div className="ItemInfo__description_item">{props.description_4}</div>
          </div>
          <div className="ItemInfo__properties padd">
            <div className="ItemInfo__header">{props.properties}</div>
            <div className="ItemInfo__properties_item">{props.properties_1}</div>
            <div className="ItemInfo__properties_item">{props.properties_2}</div>
            <div className="ItemInfo__properties_item">{props.properties_3}</div>
            <div className="ItemInfo__properties_item">{props.properties_4}</div>
          </div>
          <div className="ItemInfo__spec padd">
            <div className="ItemInfo__header">{props.specifications}</div>
            <div>
              <div className="ItemInfo__spec_head">
                {props.specifications_1}
              </div>
              <div className="ItemInfo__spec_item">{props.item_1_1}</div>
              <div className="ItemInfo__spec_item">{props.item_1_2}</div>
              <div className="ItemInfo__spec_item">{props.item_1_3}</div>
              <div className="ItemInfo__spec_item">{props.item_1_4}</div>
              <div className="ItemInfo__spec_item">{props.item_1_5}</div>
              <div className="ItemInfo__spec_item">{props.item_1_6}</div>
            </div>
            <div>
              <div className="ItemInfo__spec_head">
                {props.specifications_2}
              </div>
              <div className="ItemInfo__spec_item">{props.item_2_1}</div>
              <div className="ItemInfo__spec_item">{props.item_2_2}</div>
              <div className="ItemInfo__spec_item">{props.item_2_3}</div>
              <div className="ItemInfo__spec_item">{props.item_2_4}</div>
              <div className="ItemInfo__spec_item">{props.item_2_5}</div>
              <div className="ItemInfo__spec_item">{props.item_2_6}</div>
            </div>
            <div>
              <div className="ItemInfo__spec_head">
                {props.specifications_3}
              </div>
              <div className="ItemInfo__spec_item">{props.item_3_1}</div>
              <div className="ItemInfo__spec_item">{props.item_3_2}</div>
              <div className="ItemInfo__spec_item">{props.item_3_3}</div>
              <div className="ItemInfo__spec_item">{props.item_3_4}</div>
              <div className="ItemInfo__spec_item">{props.item_3_5}</div>
              <div className="ItemInfo__spec_item">{props.item_3_6}</div>
            </div>
            <div>
              <div className="ItemInfo__spec_head">
                {props.specifications_4}
              </div>
              <div className="ItemInfo__spec_item">{props.item_4_1}</div>
              <div className="ItemInfo__spec_item">{props.item_4_2}</div>
              <div className="ItemInfo__spec_item">{props.item_4_3}</div>
              <div className="ItemInfo__spec_item">{props.item_4_4}</div>
              <div className="ItemInfo__spec_item">{props.item_4_5}</div>
              <div className="ItemInfo__spec_item">{props.item_4_6}</div>
            </div>
            <div>
              <div className="ItemInfo__spec_head">
                {props.specifications_5}
              </div>
              <div className="ItemInfo__spec_item">{props.item_5_1}</div>
              <div className="ItemInfo__spec_item">{props.item_5_2}</div>
              <div className="ItemInfo__spec_item">{props.item_5_3}</div>
              <div className="ItemInfo__spec_item">{props.item_5_4}</div>
              <div className="ItemInfo__spec_item">{props.item_5_5}</div>
              <div className="ItemInfo__spec_item">{props.item_5_6}</div>
            </div>
            <div className="ItemInfo__spec_head">
              {props.specifications_6}
            </div>
            <div className="ItemInfo__spec_item">{props.item_6_1}</div>
            <div className="ItemInfo__spec_item">{props.item_6_2}</div>
            <div className="ItemInfo__spec_item">{props.item_6_3}</div>
            <div className="ItemInfo__spec_item">{props.item_6_4}</div>
            <div className="ItemInfo__spec_item">{props.item_6_5}</div>
            <div className="ItemInfo__spec_item">{props.item_6_6}</div>
          </div>
          <div className="ItemInfo__apply padd">
            <div className="ItemInfo__header">{props.applying}</div>
            <div className="ItemInfo__apply_item">{props.applying_1}</div>
            <div className="ItemInfo__apply_item">{props.applying_2}</div>
            <div className="ItemInfo__apply_item">{props.applying_3}</div>
            <div className="ItemInfo__apply_item">{props.applying_4}</div>
            <div className="ItemInfo__apply_item">{props.applying_5}</div>
            <div className="ItemInfo__apply_item">{props.applying_6}</div>
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
            <div className="ItemInfo__code_head">{props.code_order}</div>
            <div  className="ItemInfo__code_1 codeBlock" >
              <div className="ItemInfo__code_item">{props.code_order_1}</div>
              <div className="ItemInfo__code_text">{props.option_1}</div>
            </div>
            <div className="ItemInfo__code_2 codeBlock">
              <div className="ItemInfo__code_item">{props.code_order_2}</div>
              <div className="ItemInfo__code_text">{props.option_2}</div>
            </div>
            <div className="ItemInfo__code_3 codeBlock">
              <div className="ItemInfo__code_item">{props.code_order_3}</div>
              <div className="ItemInfo__code_text">{props.option_3}</div>
            </div>
            <div className="ItemInfo__code_4 codeBlock">
              <div className="ItemInfo__code_item">{props.code_order_4}</div>
              <div className="ItemInfo__code_text">{props.option_4}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
