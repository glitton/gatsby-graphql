import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "./navigation";
import { container, siteTitle } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query pageTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // console.log("data", data);
  return (
    <div className={container}>
      <Navigation />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}> {data.site.siteMetadata.title}</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
