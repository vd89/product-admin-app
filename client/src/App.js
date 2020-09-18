import React from 'react';
import Landing from './Component/Layout/Landing';
import Navbar from './Component/Layout/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <>
      <AlertState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </Router>
      </AlertState>
    </>
  );
}

export default App;
