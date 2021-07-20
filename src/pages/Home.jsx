import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2 className="text-center">Home Page</h2>
      <ul>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
