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
    setBtnActive(!isbtnActive);
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home_page" className="nav__logo">
            <img src={nav_logo} alt="logo" />
          </HashLink>
        </div>
        <div className={isActive ? "active_links  " : "links"}>
          <div className="MenuItems ">
            {my_navbar_data.map((data, index) => {
              return (
                <HashLink
                  className="navbtn"
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
          <i
            className={isActive ? "fas fa-times" : "fas fa-bars-staggered"}
            style={{
              fontSize: "21px",
              fontWeight: "600",
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
