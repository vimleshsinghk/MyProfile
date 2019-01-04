import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkBtn = props => {
  return (
    <NavLink className={props.className || "nav-link"} to={"/" + props.link}>
      {props.name}
      <span className="sr-only">(current)</span>
    </NavLink>
  );
};
export default NavLinkBtn;
