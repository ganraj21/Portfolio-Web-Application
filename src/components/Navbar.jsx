import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="site-title">
        Portfolio.GB
      </Link>

      <ul className="your_links">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/experience">Experience</CustomLink>
        <CustomLink to="/work">Work</CustomLink>
        <CustomLink to="/skills">Skills</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
