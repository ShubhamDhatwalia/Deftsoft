import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './emppages/Home';
import Dashboard from './components/employee/Dashboard';
import { Task } from './emppages/Task';
import { Todo } from './emppages/Todo';
import { Leaves } from './emppages/Leaves';
import { Calendar } from './emppages/Calendar';


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<Dashboard/>}>
            <Route path="task" element={<Task/>} />
            <Route path="leaves" element={<Leaves/>} />
            <Route path="todo" element={<Todo />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
