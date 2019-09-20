import React from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { Link, Redirect } from "react-router-dom";

import { registerUserAction } from "../reducers/register";

class Register extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    let name = event.target.name.value;
    let phone = event.target.phone.value;

    const data = {
      id: uuidv1(),
      email,
      password,
      name,
      phone
    };

    this.props.registerUserAction(data);

    event.target.email.value = "";
    event.target.password.value = "";
    event.target.name.value = "";
    event.target.phone.value = "";
  };

  render() {
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty("response")) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }

    return (
      <div className="post-container">
        {!isSuccess ? <div>{message}</div> : <Redirect to="dashboard" />}

        <h1 className="post_heading">Register</h1>
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
          <input
            required
            type="text"
            name="name"
            id="name"
            value="Teddy"
            placeholder="Username"
          />
          <br />
          <br />
          <input
            required
            type="number"
            name="phone"
            id="phone"
            value="6281933952900"
            placeholder="Phone Number"
          />
          <br />
          <br />

          <button>Register</button>
        </form>
        <br></br>
        <p>
          Already have account? <Link to="login">Login</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = response => ({
  response
});

const mapDispatchToProps = {
  registerUserAction: registerUserAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
