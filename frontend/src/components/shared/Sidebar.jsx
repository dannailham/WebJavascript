import classNames from 'classnames'
import React from 'react'
// import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation'
import { Link } from 'react-router-dom'


const LinkClasses = 'flex items-center gap-2 font-light px-3 py-4 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className='bg-red-500 w-60 p-3 flex flex-col space-x-4 text-white'>
          <div className='flex items-center gap-1 px-1 py-3'>
              {/* <FcBullish fontSize={24} /> */}
              <span className='text-neutral-100 ml-16 text-2xl'>X-SET</span>
              </div>
              <div className='flex-1 '>
                
              {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
              ))}
              </div>
      <Link to={'/Login'} className='flex justify-center rounded-sm'>Logout</Link>
    </div>
  )
}

//callback function
function SidebarLink({item}) {
  return(
    <Link to={item.path} className={classNames('text-white',LinkClasses)}>
    <span className='text-xl'>{item.icon}</span>
    {item.label}
    </Link>
  )
}