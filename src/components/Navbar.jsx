import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <h4> Ganesh Ghadge</h4>
          </Link>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            <Link to="/" className="site-title"></Link>
          </div>
          <div className="MenuItems">
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/about" onClick={closeMobileMenu}>
              About
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/experience" onClick={closeMobileMenu}>
              Experience
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/work" onClick={closeMobileMenu}>
              Work
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/skills" onClick={closeMobileMenu}>
              Skills
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
