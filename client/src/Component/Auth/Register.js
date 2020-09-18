import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';
import Alert from '../Layout/Alert';

const Register = (props) => {
  const { setAlert } = useContext(AlertContext);
  const { registerUser, isAuthenticated, error, clearErrors } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    mobileNumber: '',
  });

  useEffect(() => {
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [props.history, error, setAlert, clearErrors]);

  
  const { email, password, password2, mobileNumber } = formData;
  const onChangeHandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password Does not match ', 'danger');
    } else {
      registerUser(formData);
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <Alert />
      <form className='form' onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            required
            value={email}
            onChange={onChangeHandler}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Mobile Number'
            name='mobileNumber'
            value={mobileNumber}
            onChange={onChangeHandler}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={onChangeHandler}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
            value={password2}
            onChange={onChangeHandler}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </section>
  );
};

export default Register;
