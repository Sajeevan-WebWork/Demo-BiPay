import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import NavBar from '../Components/NavBar'

const Layout = ({ childern }) => {
  return (
    <div>
      <div className="flex flex-col relative w-full bg-grsaay-200">
        <div className='top-0 w-full fixed z-30'>
          <NavBar />
        </div>

        <div className="flex flex-col gap-4 mt-[4rem]">
          <div className=" fixed z-10 w-[20%] lg:w-[20%] sm:w-[6%] transition-all duration-100">
            <SideBar />
          </div>
          <div className='relative  w-[80%] lg:w-[80%] sm:w-[94%] px-3 my-5  self-end no-scrollbar'>
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Layout
