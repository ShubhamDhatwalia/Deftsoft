
import React from 'react';
import { Sidebar } from '../components/employee/Sidebar';
import { Navigation } from '../components/Navigation';
import Dashboard from '../components/employee/Dashboard';


export const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-400'>
      <Navigation />
      <div className='flex'>
        <Sidebar />
        <div className='flex-grow bg-blue-400'>
          <Dashboard/>
        </div>
      </div>
    </div>
  );
};

