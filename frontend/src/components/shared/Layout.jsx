import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout () {
  return (
    
    <div className='flex flex-row  bg-neutral-100 h-screen'>
      <Sidebar />
      <div className='container mx-7 h-full w-full'>
      <div className='p-10'>
            <div className='bg-teal-100'>header</div>
            <div className='px-3'>{<Outlet />}</div>
      </div>
      </div>
        
    </div>
    
  )
}