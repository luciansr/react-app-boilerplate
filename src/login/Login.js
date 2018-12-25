import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getAuthToken } from '../redux/actions/AuthActions';

const indexUrl = "/index";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.getAuthToken(this.state.username, this.state.password);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          ></input>
          <br />
          <label>Password</label>
          <br />
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          ></input>
          <br />
          <Button>Submit</Button>
        </form>
        <Link to={indexUrl}>Home</Link>
      </div>
    );
  }
}

Login.propTypes = {
  getAuthToken: PropTypes.func.isRequired,
  // user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.auth.user,
  authToken : state.auth.authToken
})

export default connect(mapStateToProps, { getAuthToken })(Login);
