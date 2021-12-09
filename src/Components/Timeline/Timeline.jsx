import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap/";
import "./Timeline.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import UserProfile from "../UserProfile/UserProfile";

const Timeline = (props) => {
  return (
    <Container>
    <NavigationBar/>
    {/* <Routes>
      <Route path="/" exact component={UserProfile} />
      <Route path="/" exact component={FriendsList} />
      <Route path="/" exact component={Logout} />
    </Routes> */}
    <UserProfile user={props.user}/>
    </Container>
  );
};

export default Timeline;
