import * as React from "react";
import { Link } from "gatsby";
import Navigation from "./navigation";
import { container, heading } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Navigation />
      <title>{pageTitle}</title>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
