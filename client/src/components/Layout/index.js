import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => (
  <div main="role">
    <Helmet title="tv.profitt.ru" />
    <header>
      <main>{children}</main>
    </header>
  </div>
)

export default Layout;
