import React, { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <nav className="navBar">
        <h3>Jai.dev</h3>
        <div ref={navRef} className="links">
          <ul>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </ul>
          <button onClick={showNavbar} className="navbar-btn">
            <CloseIcon />
          </button>
        </div>
        <button onClick={showNavbar} className="navbar-btn navbar-close">
          <MenuIcon />
        </button>
      </nav>
    </>
  );
};

export default Header;
