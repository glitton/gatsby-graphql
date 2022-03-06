import * as React from "react";
import Navigation from "./navigation";
import { container, heading } from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Navigation />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
