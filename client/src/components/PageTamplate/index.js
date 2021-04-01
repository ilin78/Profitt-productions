import React from "react";
import "./PageTamplate.scss";

export default function PageTamplate() {
  return (
    <div className="PageTamplate">
      PageTamplate
      <div>
        <div className="PageTamplate__image"></div>
        <div className="PageTamplate__description">Описание</div>
        <div className="PageTamplate__specifications">Характеристики</div>
        <div className="PageTamplate__similar">
          Устройства с похожим назначением
        </div>
        <div>Заказать</div>
      </div>
    </div>
  );
}
