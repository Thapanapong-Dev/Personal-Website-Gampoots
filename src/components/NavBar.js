import react, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Fade from "react-bootstrap/Fade";

export const NavBar = () => {
  const page = useSelector((state) => state.page.value);

  const [activeLink, setActiveLink] = useState(page);
  const [scrolled, setScrolled] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateClassNameActiveLink = (value) => {
    if (activeLink === value) {
      return "active navbar-link";
    }
    return "navbar-link";
  };

  useEffect(() => {
    setActiveLink(page);
    if (page === "/") setFade(true);
    else setFade(false);
  });

  const subNavBar = (value) => {
    if (value === "/") {
      return (
        <Fade in={fade}>
          <Nav
            className="sub-navbar-home flex-column position-fixed top-50 end-0 translate-middle-y"
            bg="dark"
          >
            <Nav.Link href="#skills" id={"sub-navbar-home"}>
              Skills
            </Nav.Link>
            <Nav.Link href="#project" id={"sub-navbar-home"}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" id={"sub-navbar-home"}>
              Contact
            </Nav.Link>
          </Nav>
        </Fade>
      );
    }
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className={onUpdateClassNameActiveLink("")}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                href="#"
                to="/"
                className={onUpdateClassNameActiveLink("/")}
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#"
                as={NavLink}
                to="/dashboard"
                className={onUpdateClassNameActiveLink("dashboard")}
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                href="#"
                as={NavLink}
                to="/login"
                className={onUpdateClassNameActiveLink("login")}
              >
                Login
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Thapanapong-Dev/personal-website-gampoots">
                  <img src={navIcon1} alt="linkedin" />
                </a>
                <a href="https://github.com/Thapanapong-Dev/personal-website-gampoots">
                  <img src={navIcon2} alt="facebook" />
                </a>
                <a href="https://github.com/Thapanapong-Dev/personal-website-gampoots">
                  <img src={navIcon3} alt="instagram" />
                </a>
              </div>
              <HashLink to="/contect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {subNavBar(page)}
    </div>
  );
};
