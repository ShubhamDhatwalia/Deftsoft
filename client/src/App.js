import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./emppages/Home";
import { Task } from "./emppages/Task";
import { Leaves } from "./emppages/Leaves";
import { Todo } from "./emppages/Todo";
import { Calendar } from "./emppages/Calendar";
import {Navigation} from './components/Navigation'

const App = () => {
  return (
    <BrowserRouter>
    <div><Navigation/></div>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/task" element={<Task/>} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
