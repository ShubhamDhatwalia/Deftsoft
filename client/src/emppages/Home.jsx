import React from 'react'
import { Navigation } from '../components/Navigation'
import { Sidebar } from '../components/employee/sidebar/Sidebar'
import { Dashboard } from '../components/employee/Dashboard'
export const Home = () => {
  return (
    <>
    
   <div className='w-full h-screen bg-slate-700'>
    <div className='h-[67px]'><Navigation/></div>
    <div className='flex flex-rows-2'>
    <Sidebar/>
    <Dashboard/>
    </div>
   </div>
    </>
  )
}
