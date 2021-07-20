import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/Home";

import { connect } from "react-redux";

function App({ currentUser }) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
        {!!currentUser ? <h2>logout {currentUser.email}</h2> : null}
      </div>
    </Container>
  );
}

const mapState = ({ user }) => ({ currentUser: user.currentUser });
// const mapDispatch = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

export default connect(mapState, null)(App);
