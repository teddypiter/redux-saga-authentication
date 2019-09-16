import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import Register from './Register';

import '../index.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navbar">
          <h2 className="center ">User Authentication</h2>
        </div>
        <div>
          <Switch>            
            <Route path='/' exact={true} component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;