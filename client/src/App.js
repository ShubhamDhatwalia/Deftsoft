import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./view/Main";
import TL from "./view/TL";
import Admin from "./view/Admin";
import PM from "./view/PM";
import Employee from "./view/Employee";
import Dashboard from "./employeeComp/pages/Dashboard";
import Task from "./employeeComp/pages/Task";
import TODO from "./employeeComp/pages/TODO";
import Leaves from "./employeeComp/pages/Leaves";
import Calender from "./employeeComp/pages/Calender";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/tl" element={<TL />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pm" element={<PM />} />
        <Route path="/employee" element={<Employee />}>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="task" element={<Task />} />
          <Route path="todo" element={<TODO />} />
          <Route path="leaves" element={<Leaves />} />
          <Route path="calender" element={<Calender />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
