import React from "react";
import NavLinkBtn from "./smallComponents/navlinkBtn";
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <NavLinkBtn className="navbar-brand" link ="home"  name = {props.person.name}/>
  
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLinkBtn link="home" name="Home" />
          </li>
          <li className="nav-item">
            <NavLinkBtn link="about" name="About" />
          </li>
          <li className="nav-item">
            <NavLinkBtn link="contact" name="Contact" />
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
