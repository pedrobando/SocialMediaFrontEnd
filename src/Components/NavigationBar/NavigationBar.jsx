import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap/";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Profile</li>
        </Link>
        <Link to="/about">
          <li>Friends List</li>
        </Link>
        <Link to="/list">
          <li>Logout</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
