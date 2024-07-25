import React from 'react';
import { Outlet } from 'react-router-dom';
// import EmpHome from '../../emppages/EmpHome';

export const Dashboard = () => {
  return (

    <div>
      {/* <EmpHome/> */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
