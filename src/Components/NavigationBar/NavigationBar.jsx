import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Container } from "react-bootstrap/";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  const handleLogout = (e) => {
    localStorage.removeItem('token')
    window.location.reload(true);
    //props.setUser(null);
}
  return (
    

<Navbar bg="dark" expand="lg"  className="mb-3 margin">

  <Navbar.Brand href="#home">Christmas Stories</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: Mark Otto
      </Navbar.Text>
      <Button variant="outline-primary" onClick={handleLogout}>Log out</Button>
    </Navbar.Collapse>
</Navbar>
  );
};

export default NavigationBar;
