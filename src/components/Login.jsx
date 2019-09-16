import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions';
import { setCookie } from '../utils/cookies';

class Login extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.getEmail.value;
    const password = this.getPassword.value;
    const client_id = 'aaaaa';

    const data = {
      email,
      password,
      client_id
    }
    this.props.loginUserAction(data);

    this.getEmail.value = '';
    this.getPassword.value = '';
  }

  render() {
    let isSuccess, message;
    console.log("Response in login page", this.props.response);

    if (this.props.response.hasOwnProperty('response')) {
      isSuccess = this.props.response.response.success;
      message = this.props.response.response.message;
      console.log("this is isSuccess in login component", isSuccess);
      console.log("this is isSuccess in login component", message);

      if (isSuccess) {
        setCookie('token', this.props.response.access_token, 1);
        console.log("Logged in");
      }
    }

    return (
      <div className="post-container">
        {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
        <h1 className="post_heading">Login</h1>
        <form className="form" onSubmit={this.handleSubmit} >

         <input required type="email" ref={(input) => this.getEmail = input} value="teddy@fivejack.com"
         placeholder="Email" /><br /><br />
         <input required type="password" ref={(input) => this.getPassword = input} value="123123123"
         placeholder="Password" /><br /><br />

         <button>Login</button>

        </form>
        <br></br>
        <p>Don't have account? <Link to='register'>Register</Link></p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginUserAction: loginUserAction,
};

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
