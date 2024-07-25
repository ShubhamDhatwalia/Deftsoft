import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen bg-black text-white w-64 gap-6 pt-9'>
      <div className='flex flex-col ml-9 gap-6'>
        <Link to='/employee/emphome'>Home</Link>
        <Link to="/employee/task">Task</Link>
          <Link to="/employee/leaves">Leaves</Link>
          <Link to="/employee/todo">Todo</Link>
          <Link to="/employee/calendar">Calendar</Link>
      </div>
    </div>
  );
};
