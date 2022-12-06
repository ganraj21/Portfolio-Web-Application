import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);

  const my_navbar_data_ok = [
    {
      index: 2,
      nav_link: "/education_and_certifications",
      navbar_name: "Education and Certifications",
      res: "ok",
    },
    {
      index: 3,
      nav_link: "/projects_and_experiences",
      navbar_name: "Projects and Experience",
      res: "ok",
    },
  ];

  const my_navbar_data_notok = [
    {
      index: 1,
      nav_link: "#home_page",
      navbar_name: "Home",
      res: "not ok",
    },
    {
      index: 2,
      nav_link: "#about_myself",
      navbar_name: "About Myself",
      res: "not ok",
    },
    {
      index: 3,
      nav_link: "#my_skill",
      navbar_name: "Skills and Abilities",
      res: "not ok",
    },
    {
      index: 4,
      nav_link: "#contact_page",
      navbar_name: "Contact Me",
      res: "not ok",
    },
  ];

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };

  const actionPlus = () => {
    navigate("/");
    closeMobileMenu();
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <a href="#home_page" onClick={actionPlus}>
            <h4> Ganesh Ghadge</h4>
          </a>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            {my_navbar_data_notok.map((data, index) => {
              return (
                <a key={index} href={data.nav_link} onClick={actionPlus}>
                  {data.navbar_name}
                </a>
              );
            })}

            {my_navbar_data_ok.map((data, index) => {
              return (
                <Link key={index} to={data.nav_link} onClick={closeMobileMenu}>
                  {data.navbar_name}
                </Link>
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
