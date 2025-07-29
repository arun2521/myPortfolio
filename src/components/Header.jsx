import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="hdr_container">
      <div className="menu_toggle" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`hdr_items ${isMobileMenuOpen ? "show" : ""}`}>
        <a href="#home" onClick={toggleMenu}>
          <h6>Home</h6>
        </a>
        <a href="#experience" onClick={toggleMenu}>
          <h6>Experience</h6>
        </a>
        <a href="#skills" onClick={toggleMenu}>
          <h6>Skills</h6>
        </a>
        <a href="#projects" onClick={toggleMenu}>
          <h6>Projects</h6>
        </a>
        <a href="#contact" onClick={toggleMenu}>
          <h6>Contact</h6>
        </a>
      </div>
    </div>
  );
};

export default Header;
