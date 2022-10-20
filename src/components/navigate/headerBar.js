import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../css/headerBar.css";

import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";

export const HeaderBar = () => {
  const activeClassName = "navLink-active";
  return (
    <nav className="headerBar fixed-top">
      <Stack direction="horizontal" gap={3}>
        <Navbar.Brand as={Link} to="/">
          Gampoots
        </Navbar.Brand>
        <div className="ms-auto">
          <NavLink
            to="/"
            end
            style={{ marginInline: "0.5em" }}
            className={({ isActive }) =>
              isActive ? activeClassName : "navLink"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Dashboard"
            style={{ marginInline: "0.5em" }}
            className={({ isActive }) =>
              isActive ? activeClassName : "navLink"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/Login"
            style={{ marginInline: "0.5em" }}
            className={({ isActive }) =>
              isActive ? activeClassName : "navLink"
            }
          >
            Login
          </NavLink>
        </div>
      </Stack>
    </nav>
  );
};
