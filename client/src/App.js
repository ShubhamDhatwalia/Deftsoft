import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./view/Main";
import TL from "./view/TL";
import Admin from "./view/Admin";
import PM from "./view/PM";
import Employee from "./view/Employee";
import { Dashboard } from "./Employee/EmpPages/Dashboard";
import { Task } from "./Employee/EmpPages/Task";
import { Leaves } from "./Employee/EmpPages/Leaves";
import { Calendar } from "./Employee/EmpPages/Calendar";
import { Todo } from "./Employee/EmpPages/Todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/tl" element={<TL />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pm" element={<PM />} />
        <Route path="/employee" element={<Employee />} >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="task" element={<Task />} />
          <Route path="todo" element={<Todo />} />
          <Route path="leaves" element={<Leaves />} />
          <Route path="calender" element={<Calendar />} />

        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
