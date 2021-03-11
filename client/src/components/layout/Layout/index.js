import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => (

  <div main="role">
    <Helmet title="tv.profitt.ru" />
    <main className="App__layout">{children}</main>
  </div>
)

export default Layout;
