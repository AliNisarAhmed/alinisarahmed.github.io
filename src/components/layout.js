import React from "react";
import { Helmet } from "react-helmet";

import "../styles/index.scss";

import icon32 from "../images/haskell.svg";

import Header from "./header";

const Layout = ({ children }) => (
  <div className="container" id="app">
    <Helmet
      title="Ali's Portfolio"
      link={[{ rel: "shortcut icon", type: "image/png", href: `${icon32}` }]}
    />
    <Header />
    {children}
  </div>
);

export default Layout;
