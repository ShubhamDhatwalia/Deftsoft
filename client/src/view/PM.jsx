import React from "react";
import Navigation from '../components/Navigation';
import DashboardPM from "../projectManagerComponents/dashboard";
const PM = () => {
  return (
    <>
      <Navigation></Navigation>
      <DashboardPM></DashboardPM> 
    </>
  );
};

export default PM;
