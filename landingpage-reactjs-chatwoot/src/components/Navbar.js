import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={1500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1500}>
            About
          </Link>
        </li>
        <li>
          <Link to="offer" smooth={true} duration={1500}>
            Offer
          </Link>
        </li>
        <li>
          <Link to="pricing" smooth={true} duration={1500}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
