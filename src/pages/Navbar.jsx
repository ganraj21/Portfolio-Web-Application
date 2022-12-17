import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import nav_logo from "../Image/Profile_imgs/nav_logo.png";
import "font-awesome/css/font-awesome.min.css";
import my_navbar_data from "./assets/NavData";

const Navbar = () => {
  const [colors, setColors] = useState(-1);
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const nav_a = "<";
  const nav_b = "𝒢𝒶𝓃𝓇𝒶𝒿𝟤𝟣";
  const nav_c = "/>";
  const change_color = [
    {
      br: "3px",
      bc: "#00a5ee",
      clr: "#fff",
    },
  ];

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home_page">
            <span className="nav_a">{nav_a}</span>
            <span className="nav_b">{nav_b}</span>
            <span className="nav_c">{nav_c}</span>
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
                    setColors(index);
                    setActive(false);
                  }}
                  // style={{
                  //   backgroundColor: data.bc,
                  //   // color: "white",
                  // }}
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
