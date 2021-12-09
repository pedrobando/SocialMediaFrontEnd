import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap/";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  const handleLogout = (e) => {
    localStorage.removeItem('token')
    window.location.reload(true);
    //props.setUser(null);
}
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Profile</li>
        </Link>
        <Link to="/about">
          <li>Friends List</li>
        </Link>
        <Link to="/" >
          <li><a onClick={handleLogout}>Logout</a></li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
