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
          <a href="#home_page">
            <h4> Ganesh Ghadge</h4>
          </a>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            <Link to="/" className="site-title"></Link>
          </div>
          <div className="MenuItems">
            <a href="#home_page" onClick={closeMobileMenu}>
              Home
            </a>
          </div>
          <div className="MenuItems">
            <a href="#about_myself" onClick={closeMobileMenu}>
              About
            </a>
          </div>
          <div className="MenuItems">
            <a href="#my_skills" onClick={closeMobileMenu}>
              Skills
            </a>
          </div>
          <div className="MenuItems">
            <a href="#my_work" onClick={closeMobileMenu}>
              Work
            </a>
          </div>
          <div className="MenuItems">
            <a href="#experience" onClick={closeMobileMenu}>
              Experience
            </a>
          </div>

          <div className="MenuItems">
            <a
              href="#contact_page"
              onClick={closeMobileMenu}
              style={{
                width: "102px",
              }}
            >
              Contact Me
            </a>
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
