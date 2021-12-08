import React from "react";
import { Row, Col, FloatingLabel, Form, Button, Modal } from "react-bootstrap/";
import "./RegistrationPage.css";

const RegistrationPage = (props) => {
  const user = props.user;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append('firstName', event.target[0].value);
    form.append('lastName', event.target[1].value);
    form.append('email', event.target[2].value);
    form.append('christmasPreference', event.target[3].value);
    form.append('password', event.target[4].value);
    form.append('dob', event.target[5].value);
    form.append('image', event.target[6].value);
    
    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      christmasPreference: event.target[3].value,
      password: event.target[4].value,
      dob: event.target[5].value,
      image: event.target[6].value,
    };
    console.log(form);
    props.register(form);
  };

  return (
    <Row className="center">
      <Col md={6} xs={12}>
        <img
          className="logo"
          src="/assets/img/logo.png"
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
                <FloatingLabel
                  controlId="firstName"
                  label="firstName"
                  className="mb-3"
                >
                  <Form.Control type="string" placeholder="First Name" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="lastName"
                  label="lastName"
                  className="mb-3"
                >
                  <Form.Control type="string" placeholder="Last Name" />
                </FloatingLabel>
                <FloatingLabel controlId="email" label="email" className="mb-3">
                  <Form.Control type="email" placeholder="name@email.com" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="christmasPreference"
                  label="christmasPreference"
                  className="mb-3"
                >
                  <Form.Control
                    type="string"
                    placeholder="Christmas Preference"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="password"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control type="string" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel controlId="dob" label="dob" className="mb-3">
                  <Form.Control type="date" placeholder="Date of Birth" />
                </FloatingLabel>
                <Form.Group controlId="image" className="mb-3">
                  <Form.Control type="file" accept=".jpg,.jpeg,.png"/>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-grid gap-2 mb-5">
              <p>Already an user? Login</p>
            </Modal.Footer>
          </Modal.Dialog>
        </>
      </Col>
    </Row>
  );
};

export default RegistrationPage;