import React from "react";
import { Row, Col, FloatingLabel, Form, Button, Modal } from "react-bootstrap/";
import "./RegistrationPage.css";

const RegistrationPage = (props) => {
  const user = props.user;
  const handleSubmit = (event) => {
    debugger
    console.log(event);
    event.preventDefault();
        const userData = {
          firstName: event.target[0].value,
          lastName: event.target[1].value,
          email: event.target[2].value,
          christmasPreference: event.target[3].value,
          password: event.target[4].value,
          dob: event.target[5].value,
        };
      
        props.register(userData);

      };
     
  return (
    <Row className="center">
      <Col md={6} xs={12}>
        <img
          className="logo"
          // src="/assets/img/logo.png"
          alt="Christmas Stories"
        />
        {/* <p className="text-white">
          Join us for the holidays, enjoy playing games, discussing recipes and
          celebrating holiday traditions
        </p> */}
      </Col>
      <Col md={6} xs={12}>
        <>
          <Modal.Dialog>
            <Modal.Body className="mt-5">
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="firstName" label="firstName" className="mb-3">
                <Form.Control type="string" placeholder="First Name" />
              </FloatingLabel>
              <FloatingLabel controlId="lastName" label="lastName" className="mb-3">
                <Form.Control type="string" placeholder="Last Name" />
              </FloatingLabel>
              <FloatingLabel controlId="email" label="email" className="mb-3">
                <Form.Control type="email" placeholder="name@email.com" />
              </FloatingLabel>
              <FloatingLabel controlId="christmasPreference" label="christmasPreference" className="mb-3">
                <Form.Control type="string" placeholder="Christmas Preference" />
              </FloatingLabel>
              <FloatingLabel controlId="password" label="Password" className="mb-3">
                <Form.Control type="string" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel controlId="dob" label="dob" className="mb-3">
                <Form.Control type="date" placeholder="Date of Birth" />
              </FloatingLabel>

              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                 Register
                </Button>
              </div>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-grid gap-2 mb-5">
                <p>Not a ChristmasStories user? Register</p>
            </Modal.Footer>
          </Modal.Dialog>
        </>
      </Col>
    </Row>
  );
};

export default RegistrationPage;
