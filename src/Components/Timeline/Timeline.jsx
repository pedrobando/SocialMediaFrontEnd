import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap/";
import "./Timeline.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import UserProfile from "../UserProfile/UserProfile";

const Timeline = (props) => {
  return (
    <Container>
    <NavigationBar/>
    <UserProfile user={props.user}/>
    </Container>
  );
};

export default Timeline;
