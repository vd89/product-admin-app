import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/AuthContext';

const Dashboard = () => {
  const { loadUser, user } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
    //eslint - disable - next - line;
  }, []);

  console.log(user);

  return (
    <div>
      <h1>this is the dashboard of {user?.email}</h1>
    </div>
  );
};

export default Dashboard;
