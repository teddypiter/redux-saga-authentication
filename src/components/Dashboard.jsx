import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUserAction } from "../reducers/login";

class Dashboard extends Component {
  handleLogout = event => {
    event.preventDefault();

    let client_id = "1";
    let access_token = this.props.response.login.response.data.access_token;

    const data = {
      client_id,
      access_token
    };
    this.props.logoutUserAction(data);
  };

  render() {
    let isSuccess;
    //console.log("RESPONSE TO LOGOUT", this.props.response);

    if (this.props.response.hasOwnProperty("login")) {
      isSuccess = this.props.response.login.login;
    }

    return (
      <div className="dashboard">
        {!isSuccess ? <Redirect to="login" /> : null}

        <h1>Dashboard</h1>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  logoutUserAction: logoutUserAction
};

const mapStateToProps = response => ({ response });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
