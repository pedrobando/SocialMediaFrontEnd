import React from "react";
import { Navbar } from "react-bootstrap/";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  
  return (
<nav class="nav">
  <a class="nav-link active" href="#">HOME</a>
  <a class="nav-link" href="#">PROFILE</a>
  <a class="nav-link" href="#"></a>
  <a class="nav-link disabled" href="#"></a>
</nav>
  );
};

export default NavigationBar;
