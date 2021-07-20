import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/user.actions";

const Login = ({ setCurrentUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser(user);
    history.push("/");
  };

  return (
    <>
      <Link to="/">Back to Home</Link>
      <Card>
        <Card.Body>
          <h2 className="text-center">Log in</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </Form.Group>

            <Button className="w-100" type="submit">
              Log in
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-center">Need an account? signup</div>
    </>
  );
};

const mapDispatch = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatch)(Login);
