import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from "uuid";
import { Link, Redirect } from 'react-router-dom';
import { registerUserAction } from '../actions/index';

class Register extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.getEmail.value;
    const password = this.getPassword.value;
    const name = this.getName.value;
    const phone = this.getPhone.value;

    const data = {
      id: uuidv1(),
      email,
      password,
      name,
      phone
    }
    
    this.props.registerUserAction(data);

    this.getEmail.value = '';
    this.getPassword.value = '';
    this.getName.value = '';
    this.getPhone.value = '';
  }

  render() {

    let message, isSuccess;

    if (this.props.response.hasOwnProperty('response')) {
      isSuccess = this.props.response.response.success;
      message = this.props.response.response.message;
    }

    return (
      <div className="post-container">
        {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
        
        <h1 className="post_heading">Register</h1>
        <form className="form" onSubmit={this.handleSubmit} >

         <input required type="email" ref={(input) => this.getEmail = input} value="teddy@fivejack.com"
         placeholder="Email" /><br /><br />
         <input required type="password" ref={(input) => this.getPassword = input} value="123123123"
         placeholder="Password" /><br /><br />
         <input required type="text" ref={(input) => this.getName = input} value="Teddy"
         placeholder="Username" /><br /><br />
         <input required type="number" ref={(input) => this.getPhone = input} value="6281933952900"
         placeholder="Phone Number" /><br /><br />

         <button>Register</button>

        </form>
        <br></br>
        <p>Already have account? <Link to='login'>Login</Link></p>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});

const mapDispatchToProps = {
  registerUserAction: registerUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
