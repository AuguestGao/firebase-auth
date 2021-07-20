import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  return (
    <>
      <Link to="/">Back to Home</Link>
      <Card>
        <Card.Body>
          <h2 className="text-center">Sign up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>
            <Form.Group id="passwordComfirm">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control
                type="password"
                name="passwordConfirm"
                onChange={handlePasswordConfirmChange}
                value={passwordConfirm}
                required
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-center">Already have an account? Login</div>
    </>
  );
};

export default Signup;
