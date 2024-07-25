import React from "react";
import { Home } from "../../src/emppages/Home";
import { Outlet } from "react-router-dom";


const Employee = () => {
  return <div>
    <Home/>
    <Outlet/>
  </div>;
};

export default Employee;
