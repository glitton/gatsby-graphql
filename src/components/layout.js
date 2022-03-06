import * as React from "react";
import Navigation from "./navigation";
import { container } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
