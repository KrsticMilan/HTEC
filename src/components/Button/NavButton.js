import React from "react";
import { Link } from "react-router-dom";

export const NavButton = props => {
  const { title, linkTo, className } = props;
  return (
    <Link className={className ? className : "nav-link"} to={linkTo}>
      {title}
    </Link>
  );
};
