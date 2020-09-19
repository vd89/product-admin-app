import Axios from 'axios';
import React, { useReducer } from 'react';
import setAuthToken from '../../utils/setAuthToken';
import {
  AUTH_ERROR,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from '../type';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const AuthState = (props) => {
  // InitialState for the auth component
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  const registerUser = async (formData) => {
    try {
      const res = await Axios.post('/api/user', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      // dispatch(loadUser());
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const loginUser = async (formData) => {
    try {
      const res = await Axios.post('/api/auth', formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await Axios.get('/api/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data.user,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        registerUser,
        loginUser,
        clearErrors,
        loadUser,
        logout,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
