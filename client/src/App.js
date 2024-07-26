import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./view/Main";
import TL from "./view/TL";
import Admin from "./view/Admin";
import PM from "./view/PM";
import Employee from "./view/Employee";
import Dashboard from "./components/TechLead/Dashboard/Dashboard";
import Projects from "./components/TechLead/Projects/Projects";
import Leaves from "./components/TechLead/Leaves/Leaves";
import Calender from "./components/TechLead/Calender/Calender";
import Tasks from "./components/TechLead/Tasks/Tasks";
import YourTeam from "./components/TechLead/YourTeam/YourTeam";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/tl" element={<TL />}>
          <Route path="/tl" element={<Dashboard />} />
          <Route path="/tl/tasks" element={<Tasks />} />
          <Route path="/tl/projects" element={<Projects />} />
          <Route path="/tl/yourteam" element={<YourTeam />} />
          <Route path="/tl/leaves" element={<Leaves />} />
          <Route path="/tl/calender" element={<Calender />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/pm" element={<PM />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
