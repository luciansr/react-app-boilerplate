import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const indexUrl = "/index";

class Login extends Component {
  match;
  constructor({match}) {
    super();
    this.match = match;
  }
  render() {
    return (
      <div>
      <h2>Login</h2>
      <Link to={indexUrl}>Home</Link>
    </div>
    );
  }
}

export default Login;
