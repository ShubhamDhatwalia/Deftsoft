import React from 'react';
import { Sidebar } from '../components/employee/Sidebar';
import { Navigation } from '../components/Navigation';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-400'>
      <Navigation />
      <div className='flex'>
        <Sidebar />
        <div className='flex-grow bg-blue-400'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
