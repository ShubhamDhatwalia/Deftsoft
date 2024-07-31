import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./view/Main";
import TL from "./view/TL";
import Admin from "./view/Admin";
import PM from "./view/PM";
import Employee from "./view/Employee";

//  pm imports

import PMdashboard from './projectManager/pages/Dashboard';
import PMcalender from './projectManager/pages/Calender';
import PMleaves from './projectManager/pages/Leaves';
import PMteam from './projectManager/pages/Team';
import PMprojects from './projectManager/pages/Projects';


//  admin imports 

import Dashboard from "./admin/pages/Dashboard";
import Employees from "./admin/pages/Employees";
import Leaves from "./admin/pages/Leaves";
import Projects from "./admin/pages/Projects";
import Calender from "./admin/pages/Calender";

import EmDashboard from "./employeeComp/pages/Dashboard";
import EmTask from "./employeeComp/pages/Task";
import EmTODO from "./employeeComp/pages/TODO";
import EmLeaves from "./employeeComp/pages/Leaves";
import EmCalender from "./employeeComp/pages/Calender";

import TLdashboard from "./components/TechLead/Dashboard/Dashboard";
import TLprojects from "./components/TechLead/Projects/Projects";
import TLleaves from "./components/TechLead/Leaves/Leaves";
import TLcalender from "./components/TechLead/Calender/Calender";
import TLtasks from "./components/TechLead/Tasks/Tasks";
import TLyourTeam from "./components/TechLead/YourTeam/YourTeam";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/tl" element={<TL />}>
          <Route path="/tl" element={<TLdashboard />} />
          <Route path="/tl/tasks" element={<TLtasks />} />
          <Route path="/tl/projects" element={<TLprojects />} />
          <Route path="/tl/yourteam" element={<TLyourTeam />} />
          <Route path="/tl/leaves" element={<TLleaves />} />
          <Route path="/tl/calender" element={<TLcalender />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="task" element={<Projects />} />
          <Route path="todo" element={<Employees />} />
          <Route path="leaves" element={<Leaves />} />
          <Route path="calender" element={<Calender />} />
        </Route>
        <Route path="/pm" element={<PM />} >
        <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<PMdashboard />} />
          <Route path="task" element={<PMprojects />} />
          <Route path="todo" element={<PMteam />} />
          <Route path="leaves" element={<PMleaves />} />
          <Route path="calender" element={<PMcalender />} />
        </Route>

        <Route path="/employee" element={<Employee />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<EmDashboard />} />
          <Route path="task" element={<EmTask />} />
          <Route path="todo" element={<EmTODO />} />
          <Route path="leaves" element={<EmLeaves />} />
          <Route path="calender" element={<EmCalender />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
