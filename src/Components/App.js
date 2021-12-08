import "./App.css";
import { Container, Navbar } from "react-bootstrap/";
import React, { useState, useEffect } from "react";
import GatePage from "./GatePage/GatePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Timeline from "./Timeline/Timeline";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import NavigationBar from "./NavigationBar/NavigationBar";
// import { useNavigate } from "react-router";

const App = (props) => {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();
  const login = async (user) => {
    await axios
      .post(`http://localhost:5050/api/users/login`, user)
      .then((res) => {
        localStorage.setItem("token", res.data);
        const jwt = localStorage.getItem("token");
        setUser(jwtDecode(jwt));
      });
  };
  const register = async (user) => {
    await axios
      .post(`http://localhost:5050/api/users/register`, user)
      .then((res) => {
        localStorage.setItem("token", res.data);
        const jwt = localStorage.getItem("token");
        setUser(jwtDecode(jwt));
      });
  };
  const jwt = localStorage.getItem("token");
  useEffect(() => {
    console.log("Effects is running");
    if (jwt) setUser(jwtDecode(jwt));
    // Authentication is already happening with the jwt token from our back end.
    // We would only have to figure out how to use the auth with Routes.
  }, []);

  return (
    <BrowserRouter>
      <Container className="gatePageBackground">
        {/* <MenuNavigation/> */}
        <Routes>
          {!user && (
            <Route
              path="/"
              element={
                <>
                  <GatePage login={login} user={user} setUser={setUser} />
                  <RegistrationPage
                    register={register}
                    user={user}
                    setUser={setUser}
                  />
                </>
              }
            />
          )}
          {!user && (
            <Route
              path="/"
              element={
                <RegistrationPage
                  login={register}
                  user={user}
                  setUser={setUser}
                />
              }
            />
          )}
          {user && (
            <Route
              path="/"
              element={
                <Timeline
                  user={user}
                />
              }
            />
          )}
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
