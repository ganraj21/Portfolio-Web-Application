import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="outline-frame">
      <div className="links">
        <nav>
          <ul>
            <li>
              <Link to="/" className="logo">
                Portfolio.GB
              </Link>
              <div className="end">
                <li>
                  <Link className="navl" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navl" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="navl" to="/skills">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link className="navl" to="/work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link className="navl" to="/experience">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link className="navl" to="/contact">
                    Contact Me
                  </Link>
                </li>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
