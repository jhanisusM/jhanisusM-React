import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


const Navbar = () => (
  <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top ">
      <div id="main">
        <a> Jhanisus Melendez. </a>
      </div>
      <button
        className="navbar-toggler ml-auto"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              <span className="fa fa-home" />  About
        </Link>
          </li>
          <li className="nav-item">
            <Link to="/tech" className={window.location.pathname === "/tech" ? "nav-link active" : "nav-link"}>
              <span className="fa fa-floppy-o" />  Technology
        </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              <span className="fa fa-folder-open" /> Portfolio
        </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              <span className="fa fa-envelope" /> Contact
        </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
              <span className="fa fa-list-ul" /> Resume
        </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);


export default Navbar;
