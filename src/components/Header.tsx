import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div
      className="head-bar"
      style={{
        height: "200px",
        backgroundImage:
          "linear-gradient(to right, rgba(248,240,239,1), rgba(238,237,227), rgba(253,251,238,1))",
      }}
     >
      <div className="Sci-bar">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/nolan/64/link.png"
          alt="link"
        />
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/vertical-line.png"
          alt="vertical-line"
        />
        <Link to="/">SCISSOR</Link>
      </div>
      
      <button className="hamburger-icon" onClick={toggleMenu}>
        &#9776;
      </button>

     <div className="desktop-menu">

      <div className="My-bar">My URLs</div>
      
      <div className="head-list">
        <Link to="/" onClick={() => scrollToSection("container-grid")}>
          Features
        </Link>
      </div>
      <div className="head-list">
        <Link to="/" onClick={() => scrollToSection("div-container")}>
          Pricing
        </Link>
      </div>
      <div className="head-list">
        <Link to="/analytics">Analytics</Link>
      </div>
      <div className="faqHead-list">
        <Link to="/" onClick={() => scrollToSection("faQ")}>
          FAQs
        </Link>
      </div>
      <Link to="/signin" className="log-bar">
        Log in
      </Link>
      <Link
        to="/"
        onClick={() => scrollToSection("gradient-bar")}
        className="Try-bar"
      >
        Try for free
      </Link>


      </div>
     

      {showMenu && (
        <div className="mobile-menu">
          <div className="My-bar">My URLs</div>
          <div className="head-list">
            <Link to="/" onClick={() => scrollToSection("container-grid")}>
              Features
            </Link>
          </div>
          <div className="head-list">
            <Link to="/" onClick={() => scrollToSection("div-container")}>
              Pricing
            </Link>
          </div>
          <div className="head-list">
            <Link to="/analytics">Analytics</Link>
          </div>
          <div className="faqHead-list">
            <Link to="/" onClick={() => scrollToSection("faQ")}>
              FAQs
            </Link>
          </div>
          <Link to="/signin" className="log-bar">
            Log in
          </Link>
          <Link
            to="/"
            onClick={() => scrollToSection("gradient-bar")}
            className="Try-bar"
          >
            Try for free
          </Link>
          <button className="close-menu" onClick={toggleMenu}>
            &#10006;
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
