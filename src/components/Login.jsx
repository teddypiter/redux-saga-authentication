import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginUserAction } from "../reducers/login";

class Login extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    let client_id = "1";

    const data = {
      email,
      password,
      client_id
    };
    this.props.loginUserAction(data);

    event.target.email.value = "";
    event.target.password.value = "";
  };

  render() {
    let isSuccess, message;

    try {
      if (this.props.response.hasOwnProperty("login")) {
        isSuccess = this.props.response.login.login;
        message = this.props.response.login.response.message;

        if (isSuccess) {
          console.log("Logged in");
        }
      }
    } catch (ex) {}

    return (
      <div className="post-container">
        {!isSuccess ? <div>{message}</div> : <Redirect to="dashboard" />}
        <h1 className="post_heading">Login</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="email"
            name="email"
            id="email"
            value="teddy@fivejack.com"
            placeholder="Email"
          />
          <br />
          <br />
          <input
            required
            type="password"
            name="password"
            id="password"
            value="123123123"
            placeholder="Password"
          />
          <br />
          <br />

          <button>Login</button>
        </form>
        <br></br>
        <p>
          Don't have account? <Link to="register">Register</Link>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginUserAction: loginUserAction
};

const mapStateToProps = response => ({ response });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
