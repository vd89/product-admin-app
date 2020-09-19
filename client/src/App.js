import React from 'react';
import Landing from './Component/Layout/Landing';
import Navbar from './Component/Layout/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './Component/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard';
import AddProduct from './Component/Dashboard/Product/AddProduct';
import EditProduct from './Component/Dashboard/Product/EditProduct';

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/addProduct' component={AddProduct} />
            <PrivateRoute exact path='/editProduct' component={EditProduct} />
          </Switch>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
