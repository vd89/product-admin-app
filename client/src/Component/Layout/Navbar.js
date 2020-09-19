import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

const Navbar = () => {
  const { logout, user, isAuthenticated } = useContext(AuthContext);
  const gustLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  const authLinks = (
    <ul>
      <li>
        <Link to='/addProduct'>Add Product | </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <img src={user?.avatar} alt='' style={{ width: '25px', borderRadius: '50%' }} />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' /> <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <h2>
        <Link to='/'>
          <i className='fas fa-code'></i> Admin
        </Link>
      </h2>
      <nav>{isAuthenticated ? authLinks : gustLinks}</nav>
    </nav>
  );
};

export default Navbar;
