import * as React from "react";
import Navigation from "./navigation";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Navigation />
      <title>{pageTitle}</title>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
