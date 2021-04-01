import React from "react";


export default function ItemInfo(props) {
  return (
        <div className="ItemInfo">
          <div>
            <div>{props.name}</div>
            <div className="ItemInfo__image"></div>
            <div className="ItemInfo__description">
              <div className="ItemInfo__description_head">Описание</div>
              <div className="ItemInfo__description_text">{props.discription}</div>
            </div>
            <div className="ItemInfo__specifications">
              <div className="ItemInfo__specifications_head">Характеристики</div>
              <div className="ItemInfo__specifications_text">{props.specifications}</div>
            </div>
          </div>
        </div>
  );
}
