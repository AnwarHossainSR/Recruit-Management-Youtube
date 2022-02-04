import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

const Nav = ({ cmp }) => {
  return (
    <div className="home-header-container-nav">
      <div className="home-header-container-nav-left">
        <div className="home-header-container-nav-left__branding">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="home-header-container-nav-right">
        <Link
          className={`${
            cmp === "home" ? "home-header-container-nav-right--active-menu" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${
            cmp === "jobs" ? "home-header-container-nav-right--active-menu" : ""
          }`}
          to="/jobs"
        >
          Browse Job
        </Link>
        <Link
          className={`${
            cmp === "blogs"
              ? "home-header-container-nav-right--active-menu"
              : ""
          }`}
          to="/blogs"
        >
          Blog
        </Link>
        <Link
          className={`${
            cmp === "contact"
              ? "home-header-container-nav-right--active-menu"
              : ""
          }`}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={`${
            cmp === "auth" ? "home-header-container-nav-right--active-menu" : ""
          }`}
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
