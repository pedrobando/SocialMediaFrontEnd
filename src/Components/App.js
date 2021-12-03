import './App.css';
import { Container } from "react-bootstrap/";
import React, { useState, useEffect, } from "react";
import GatePage from "./GatePage/GatePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Wall from "./Wall/Wall";
import { useNavigate } from 'react-router';


const App = (props)  => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const login = async (user) => {
    await axios
      .post(`http://localhost:5050/api/users/login`, user)
      .then((res) => {
        localStorage.setItem('token', res.data)
      });
  };
  const jwt = localStorage.getItem('token');
  useEffect(() => {
    console.log("Effects is running");
    setUser(jwtDecode(jwt))
    // Authentication is already happening with the jwt token from our back end. 
    // We would only have to figure out how to use the auth with Routes.
  }, []);

  return ( 
    <Container className="gatePageBackground">              
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GatePage login={login} user={user} setUser={setUser}/>} />
          <Route path="/wall" exact element={Wall}/>
        </Routes>
      </BrowserRouter>
    </Container>
   );
}
 
export default App;