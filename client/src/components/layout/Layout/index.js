import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header"
import './style.scss'
export default function Layout({ children }) {
  return (
    <div>
      <header>
        <div main="role">
          <Helmet title="tv.profitt.ru" />
        </div>
        <Header />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}