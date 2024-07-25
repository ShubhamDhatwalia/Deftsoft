import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen bg-black text-white w-64 gap-6 pt-9'>
      <div className='flex flex-col ml-9 gap-6'>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/task'>Task</Link>
        <Link to='/dashboard/leaves'>Leaves</Link>
        <Link to='/dashboard/todo'>TODO</Link>
        <Link to='/dashboard/calendar'>Calendar</Link>
      </div>
    </div>
  );
};
