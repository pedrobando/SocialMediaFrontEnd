import './App.css';
import { Container } from "react-bootstrap/";
import React, { useState, useEffect, } from "react";
import GatePage from "./GatePage/GatePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


const App = ()  => {
  const [user, setUser] = useState(null);
  const jwt = localStorage.getItem('token');
  console.log(jwt, "Response data")
  try{
    const user = jwtDecode(jwt)
    setUser(user)
    //const jwt = localStorage.setItem('token', responseData.token );
    const response = axios.get('http://localhost:5050/api/users', {headers: {'x-auth-token': jwt}});
    console.log(response.data, "Response data")
  }catch{}
  
  return ( 
    <Container className="gatePageBackground">              
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GatePage/>} />
        </Routes>
      </BrowserRouter>
    </Container>
   );
}
 
export default App;