import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { navLinks, navLinkItem, navLinkText } from "./layout.module.css";

const Navigation = () => {
  return (
    <nav>
      <div>
        <StaticImage alt="Gatsby logo" src="../images/gatsby.png" />
        <StaticImage alt="GraphQL logo" src="../images/graphql.png" />
      </div>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
