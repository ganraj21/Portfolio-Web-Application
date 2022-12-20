import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import my_navbar_data from "./assets/NavData";
// import nav_logo from "../Image/Profile_imgs/nav_logo.png";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const nav_a = "<";
  const nav_b = "Ganraj21";
  const nav_c = "/>";

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home_page">
            <span className="nav_a">{nav_a}</span>
            <span className="nav_b">{nav_b}</span>
            <span className="nav_c">{nav_c}</span>
            {/* <img src={nav_logo} alt="" /> */}
          </HashLink>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            {my_navbar_data.map((data, index) => {
              return (
                <HashLink
                  key={index}
                  to={data.nav_link}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  {data.navbar_name}
                </HashLink>
              );
            })}
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
