import "./App.css";
import { Container, Navbar } from "react-bootstrap/";
import React, { useState, useEffect } from "react";
import GatePage from "./GatePage/GatePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Timeline from "./Timeline/Timeline";
import RegistrationPage from "./RegistrationPage/RegistrationPage";

// import { useNavigate } from "react-router";

const App = (props) => {
  const [user, setUser] = useState(null);
  const [value0, setValue0] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [value5, setValue5] = useState(null);
  const [value6, setValue6] = useState(null);
  const [formData, setFormData] = useState(null);
  const [posts, setPosts] = useState(null);
  // const navigate = useNavigate();


  const login = async (user) => {
    await axios
      .post(`http://localhost:5050/api/users/login`, user)
      .then((res) => {
        localStorage.setItem("token", res.data);
        const jwt = localStorage.getItem("token");
        setUser(jwtDecode(jwt));
        getPosts(user);
      if(!posts) setPosts(null)
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

  const getPosts = async (user) => {
    await axios
      .get(`http://localhost:5050/api/users/${user._id}/posts`)
      .then((res) => setPosts(res));
  };
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
  const newPost = async (post, user, jwt) => {
    await axios
      .post(`http://localhost:5050/api/users/${user.id}/posts`, post)
      .then((res) => {
        console.log(res.data)
        setPosts(res.data)
      });
      
      console.log(jwt);
      getPosts(user);
  }
  const like = async (post, user) => {
    await axios
      .patch(`http://localhost:5050/api/users/${user._id}/posts/${post._id}`)
      .then((res) => {
        setPosts(res.data)
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
        <Routes>
          {!user && (
            <Route
              path="/"
              element={
                <>
                  <GatePage login={login} user={user} setUser={setUser} />
                </>
              }
            />
          )}
          {!user && (
            <Route
              path="/register"
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
                  setUser={setUser}
                  getPosts={getPosts}
                  posts={posts}
                  like={like}
                  newPost={newPost}
                  jwt={jwt}
                />
              }
            />
          )}
        </Routes>
    </BrowserRouter>
  );
};

export default App;
