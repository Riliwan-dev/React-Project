import React, { useState } from "react";
import "../styles/header.css";
import menu from "../images/Vector.svg"
import close from "../images/Vector (1).svg";
import { Link } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        get<span>linked</span>
      </div>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src={close} alt="Close Menu" />
          ) : (
            <img src={menu} alt="Open Menu" />
          )}
        </div>
        <div className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Timeline</a>
            </li>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="/contact" className="diff">Contact</a>
            </li>
          </ul>
          <Link className="register" to="/register">
            register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
