import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import my_navbar_data from "./assets/NavData";
import nav_logo from "../Image/Profile_imgs/nav_logo.png";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isbtnActive, setBtnActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
    setActive(!isbtnActive);
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home_page">
            <img src={nav_logo} alt="logo" />
          </HashLink>
        </div>
        <div className={isActive ? "active_links " : "links"}>
          <div className="MenuItems">
            {my_navbar_data.map((data, index) => {
              return (
                <HashLink
                  className={isbtnActive ? "btn" : "btn_active"}
                  key={index}
                  to={data.nav_link}
                  onClick={() => {
                    setActive(false);
                    setBtnActive(false);
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
