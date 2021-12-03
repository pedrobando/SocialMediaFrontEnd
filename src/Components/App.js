import './App.css';
import { Container } from "react-bootstrap/";
import React, { useState, useEffect, } from "react";
import GatePage from "./GatePage/GatePage";
import reactDom from 'react-dom';
import {BrowserRouter, Route, Switch, } from 'react-router-dom';


const App = ()  => {
  const [user, setUser] = useState(null);
  //const jwt = localStorage.setItem('token', responseData.token );
  const tokenFromStorage = localStorage.getItem('token');
  return (    
    
      <GatePage/>

   );
}
 
export default App;