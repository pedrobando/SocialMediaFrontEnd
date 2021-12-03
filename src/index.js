import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import GatePage from './Components/GatePage/GatePage';
import { Container, Row, Col, FloatingLabel, Form } from "react-bootstrap/";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <Container className="gatePageBackground">
    <App />
    </Container>
    <Routes>
      <Route path="/" exact component={GatePage} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
