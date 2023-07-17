import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./img/Logo.svg";
const Navbar = () => {
  return (
    <div className="navbarWrapper">
      {/* LOGO */}
      <NavLink
        className={({ isActive }) =>
          isActive ? "active navbar-link" : "navbar-link"
        }
        to="/"
      >
        <img src={Logo} width={100} alt="Logo" className="Logo" />
      </NavLink>
      {/* NAVLINKS */}
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navbar-link" : "navbar-link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navbar-link" : "navbar-link"
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navbar-link" : "navbar-link"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active navbar-link" : "navbar-link"
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
