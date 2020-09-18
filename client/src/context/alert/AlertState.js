import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../type';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';

const AlertState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    const id = v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      });
    }, 5000);
  };

  return <AlertContext.Provider value={{ alerts: state, setAlert }}>{props.children}</AlertContext.Provider>;
};

export default AlertState;
