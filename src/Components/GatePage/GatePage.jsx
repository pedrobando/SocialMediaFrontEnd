import React from "react";
import { Row, Col, FloatingLabel, Form, Button, Modal } from "react-bootstrap/";
import "./GatePage.css";

const GatePage = (props) => {
  return (
    <Row className="center">
      <Col md={6} xs={12}>
        <img
          className="logo"
          src="/assets/img/logo.png"
          alt="Christmas Stories"
        />
        <p className="text-white">
          Join us for the holidays, enjoy playing games, discussing recipes and
          celebrating holiday traditions
        </p>
      </Col>
      <Col md={6} xs={12}>
        <>
          <Modal.Dialog>
            <Modal.Body className="mt-5">
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Log In
                </Button>
              </div>
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

export default GatePage;
