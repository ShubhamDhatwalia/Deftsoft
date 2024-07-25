import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./view/Main";
import TL from "./view/TL";
import Admin from "./view/Admin";
import PM from "./view/PM";
import Employee from "./view/Employee";
import  EmpHome  from "./emppages/EmpHome";
import { Task } from "./emppages/Task";
import { Leaves } from "./emppages/Leaves";
import { Todo } from "./emppages/Todo";
import { Calendar } from "./emppages/Calendar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tl" element={<TL />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pm" element={<PM />} />
        <Route path="/employee" element={<Employee />} >
          <Route path="emphome" element={<EmpHome/>} />
          <Route path="task" element={<Task />} />
          <Route path="leaves" element={<Leaves />} />
          <Route path="todo" element={<Todo />} />
          <Route path="calendar" element={<Calendar />} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
