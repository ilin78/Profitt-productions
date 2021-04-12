import React from "react";
import "./ItemInfo.scss";
export default function ItemInfo(props) {
  return (
    <div className="ItemInfo">
      <div className="ItemInfo__container">
        <div className="ItemInfo__header">
          <div className="ItemInfo__header_content">
            <div className="ItemInfo__header_content-name">{props.name}</div>

            <div className="ItemInfo__header_content-name2">{props.name2}</div>
            <div className="ItemInfo__header_content-type">{props.type}</div>
            <div className="ItemInfo__header_content-text">
              {props.definition}
            </div>
          </div>
        </div>
        <div className="ItemInfo__image">
          <div className="ItemInfo__image_content">
            <div className="ItemInfo__image_content-item"></div>
            <div className="ItemInfo__image_content-item"></div>
            <div className="ItemInfo__image_content-item"></div>
          </div>
        </div>
        <div className="ItemInfo__spec">
          <div className="ItemInfo__spec_content">
            <div className="ItemInfo__spec_content-header">
              {props.specifications}
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_1}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_1_1}</div>
              <div>{props.item_1_2}</div>
              <div>{props.item_1_3}</div>
              <div>{props.item_1_4}</div>
              <div>{props.item_1_5}</div>
              <div>{props.item_1_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_2}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_2_1}</div>
              <div>{props.item_2_2}</div>
              <div>{props.item_2_3}</div>
              <div>{props.item_2_4}</div>
              <div>{props.item_2_5}</div>
              <div>{props.item_2_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_3}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_3_1}</div>
              <div>{props.item_3_2}</div>
              <div>{props.item_3_3}</div>
              <div>{props.item_3_4}</div>
              <div>{props.item_3_5}</div>
              <div>{props.item_3_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_4}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_4_1}</div>
              <div>{props.item_4_2}</div>
              <div>{props.item_4_3}</div>
              <div>{props.item_4_4}</div>
              <div>{props.item_4_5}</div>
              <div>{props.item_4_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_5}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_5_1}</div>
              <div>{props.item_5_2}</div>
              <div>{props.item_5_3}</div>
              <div>{props.item_5_4}</div>
              <div>{props.item_5_5}</div>
              <div>{props.item_5_6}</div>
            </div>
            <div className="ItemInfo__spec_content-head">
              {props.specifications_6}
            </div>
            <div className="ItemInfo__spec_content-item">
              <div>{props.item_6_1}</div>
              <div>{props.item_6_2}</div>
              <div>{props.item_6_3}</div>
              <div>{props.item_6_4}</div>
              <div>{props.item_6_5}</div>
              <div>{props.item_6_6}</div>
            </div>
          </div>
        </div>
        <div className="ItemInfo__positive">
          <div className="ItemInfo__positive_content">
            <div className="ItemInfo__positive_content-header">
              {props.positive}
            </div>
            <div className="ItemInfo__positive_content-item">
              <div>{props.positive_1}</div>
              <div>{props.positive_2}</div>
              <div>{props.positive_3}</div>
              <div>{props.positive_4}</div>
              <div>{props.positive_5}</div>
              <div>{props.positive_6}</div>
              <div>{props.positive_7}</div>
              <div>{props.positive_8}</div>
              <div>{props.positive_9}</div>
              <div>{props.positive_10}</div>
            </div>
          </div>
        </div>

        <div className="ItemInfo__code">
          <div className="ItemInfo__code_content">
            <div className="ItemInfo__code_content-header">
              {props.code_order}
            </div>
            <div className="ItemInfo__code_content-item">
              <div className="ItemInfo__code_content-item_head">
                {props.code_order_1}
              </div>
              <div className="ItemInfo__code_content-item_text">
                {props.option_1}
              </div>
            </div>
            <div className="ItemInfo__code_content-item">
              <div className="ItemInfo__code_content-item_head">
                {props.code_order_2}
              </div>
              <div className="ItemInfo__code_content-item_text">
                {props.option_2}
              </div>
            </div>
            <div className="ItemInfo__code_content-item">
              <div className="ItemInfo__code_content-item_head">
                {props.code_order_3}
              </div>
              <div className="ItemInfo__code_content-item_text">
                {props.option_3}
              </div>
            </div>
            <div className="ItemInfo__code_content-item">
              <div className="ItemInfo__code_content-item_head">
                {props.code_order_4}
              </div>
              <div className="ItemInfo__code_content-item_text">
                {props.option_4}
              </div>
            </div>
            {/* <button>
              <div className="ItemInfo__btn">{props.order}</div>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
