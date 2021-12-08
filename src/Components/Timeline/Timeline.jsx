import React from "react";
import { Row, Col, Card } from "react-bootstrap/";
import "./Timeline.css";

const Timeline = ({user}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`http://localhost:5050/${user.image}`}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          firstName:
          lastName:
          christmasPreference:
          aboutMe:
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Timeline;
