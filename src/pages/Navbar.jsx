import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const my_navbar_data = [
    {
      index: 1,
      nav_link: "#home_page",
      navbar_name: "Home",
      // nav_styles: "62px",
    },
    {
      index: 2,
      nav_link: "#about_myself",
      navbar_name: "About Myself",
      // nav_styles: "124px",
    },
    {
      index: 3,
      nav_link: "#my_skills",
      navbar_name: "Skills and Abilities",
      // nav_styles: "180px",
    },
    {
      index: 4,
      nav_link: "#my_work",
      navbar_name: "Education and Certifications",
      // nav_styles: "248px",
    },
    {
      index: 5,
      nav_link: "#experience",
      navbar_name: "Projects and Experience",
      // nav_styles: "212px",
    },
    {
      index: 6,
      nav_link: "#contact_page",
      navbar_name: "Contact Me",
      // nav_styles: "154px",
    },
  ];

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
            {my_navbar_data.map((data, index) => {
              return (
                <a key={index} href={data.nav_link} onClick={closeMobileMenu}>
                  {data.navbar_name}
                </a>
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
