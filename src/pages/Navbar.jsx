import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const my_navbar_data = [
    {
      index: 1,
      nav_link: `/#home_page`,
      navbar_name: "Home",
    },
    {
      index: 2,
      nav_link: `/#about_myself`,
      navbar_name: "About Myself",
    },
    {
      index: 3,
      nav_link: `/#my_skill`,
      navbar_name: "Skills and Abilities",
    },
    {
      index: 4,
      nav_link: "/education_and_certifications",
      navbar_name: "Education and Certifications",
    },
    {
      index: 5,
      nav_link: "/projects_and_experiences",
      navbar_name: "Projects and Experience",
    },
    {
      index: 6,
      nav_link: `/#contact_page`,
      navbar_name: "Contact Me",
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
          <HashLink to="/#home_page">
            <h4> Ganesh Ghadge</h4>
          </HashLink>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems" data-aos="fade-right">
            {my_navbar_data.map((data, index) => {
              return (
                <HashLink
                  key={index}
                  to={data.nav_link}
                  onClick={closeMobileMenu}
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
