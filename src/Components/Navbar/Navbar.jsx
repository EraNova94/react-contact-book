import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__side">
          <h1>Students</h1>
          <div className="nav__list">
            <ul>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
              <li>asd</li>
            </ul>
          </div>
          <div className="nav__search">
            <input type="text" placeholder="search" />
            <button>Click</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
