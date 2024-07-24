import React from 'react'
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export const Sidebar = () => {
  return (
   <>
   <div className=''>
    <div className='flex flex-col h-screen bg-black text-white w-64 gap-6 pt-9 ' >
        <Link to='home'>Home</Link>
        <Link to='task'>Task</Link>
        <Link to='leaves'>Leaves</Link>
        <Link to='todo'>TODO</Link>
        <Link to='calendar'>Calendar</Link>

    </div>
    <Outlet/>
   </div>
   </>
  )
}
