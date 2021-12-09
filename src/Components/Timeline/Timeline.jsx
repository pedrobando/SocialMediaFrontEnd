import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap/";
import "./Timeline.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import UserProfile from "../UserProfile/UserProfile";
import Posts from "../Posts/Post";

const Timeline = (props) => {
  return (
    <Container>
      <Row>
    <NavigationBar/>
    </Row>
    {/* <Routes>
      <Route path="/" exact component={UserProfile} />
      <Route path="/" exact component={FriendsList} />
      <Route path="/" exact component={Logout} />
    </Routes> */}
    <Row>
    <UserProfile user={props.user}/>
    <Posts newPost={props.newPost} user={props.user}  jwt={props.jwt}/>
    </Row>
    </Container>
  );
};

export default Timeline;
