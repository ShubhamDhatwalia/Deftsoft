import React from 'react'
import { Sidebar } from '../components/employee/Sidebar'
import { Dashboard } from '../components/employee/Dashboard'
import { Navigation } from '../components/Navigation'
export const Home = () => {
  return (
    <>
    
   <div className='grid grid-cols-2 w-full h-screen  '>
    <Navigation/>
    <Sidebar/>
    <Dashboard/>
   </div>
    </>
  )
}
