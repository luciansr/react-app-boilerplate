import React from "react";
import { Link } from "react-router-dom";

const Home = () => <div>
  <h2>Home</h2>
  <Link to={`login`}>Login</Link>
</div>;

export default Home;