import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const CustomNavbar = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <nav className="navbar navbar--light">
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/">
          <img
            className="navbar__logo"
            src={siteConfig.customFields.logo}
            alt={siteConfig.title}
          />
          <span className="navbar__title">{siteConfig.title}</span>
        </Link>
      </div>
    </nav>
  );
};

export default CustomNavbar;
