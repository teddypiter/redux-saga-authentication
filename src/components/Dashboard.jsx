import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Link to='login'>Logout</Link>
      </div>
    );
  }
}

export default Dashboard;
