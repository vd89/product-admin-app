import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import Products from './Products';

const Dashboard = () => {
  const { loadUser, user } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <section className='container'>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user?.email}
      </p>
      <div className='dash-buttons'>
        <Link to='/addProduct' className='btn btn-light'>
          <i className='fab fa-black-tie text-primary'></i> Add Product
        </Link>
        <Link to='/editProduct' className='btn btn-light'>
          <i className='fas fa-graduation-cap text-primary'></i> Edit Product
        </Link>
      </div>
      <Products />
    </section>
  );
};

export default Dashboard;
