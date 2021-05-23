import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import { RiMoonClearFill, RiSunLine } from "react-icons/ri";


// Image
import logo from "../images/logo.svg";

function NavBar({ theme, setTheme }) {
  const [expanded, setExpanded] = useState(false);
  const [themeLogo, setThemeLogo] = useState(<RiMoonClearFill />);

  useEffect(() => {
    theme === "dark"
      ? setThemeLogo(<RiMoonClearFill />)
      : setThemeLogo(<RiSunLine />);
  }, [theme]);

  return (
    <Navbar
      className={theme}
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand href="#home">
        <img
          className="d-inline-block align-top"
          alt="React Logo"
          src={logo}
          width="45"
          height="45"
          id="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        // Set the expanded state with the toggle button
        onClick={() => setExpanded(expanded ? false : true)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="h4">
        <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
              // Handle collapse on select
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 500)
              }
            >
              About
            </Link>
          </Nav.Item>
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
              // Handle collapse on select
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 500)
              }
            >
              Skills
            </Link>
          </Nav.Item>
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
              // Handle collapse on select
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 500)
              }
            >
              Projects
            </Link>
          </Nav.Item>
          <Nav.Item className="mr-3">
            <Link
              className="text-white"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={750}
              offset={-8}
              // Handle collapse on select
              onClick={() =>
                setTimeout(() => {
                  setExpanded(false);
                }, 500)
              }
            >
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

