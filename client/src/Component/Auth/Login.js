import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';
import Alert from '../Layout/Alert';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { loginUser, isAuthenticated, user, error, clearErrors } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  const { email, password } = formData;

  useEffect(() => {
    if (isAuthenticated) {
       props.history.push('/dashboard');
     }

    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
  }, [isAuthenticated, error, props.history, user, setAlert, clearErrors]);

  const onChangeHandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Email and password are required', 'danger');
    } else {
      loginUser(formData);
    }
  };

  return (
    <section className='container'>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into Your Account
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
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' name='password' value={password} onChange={onChangeHandler} />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </section>
  );
};;

export default Login;
