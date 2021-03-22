import React from "react";
import Landuage from './Language'
import Links from './Links'

import './style.scss'

export default function Header() {
  return (
    <div className="Header">
        <logo className="Header__logo">PROFITT</logo>
        <Links />
        <Landuage />
    </div>
  );
}
