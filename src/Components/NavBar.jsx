import React from 'react'
import Logo from '../../public/logo.svg'
import Profile from '../../public/Profile.jpg'
import { Bell, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

const NavBar = () => {
    return (
        <>
            <div className="flex justify-between relative items-center w-full bg-white px-4 py-2 h-[4rem] ">
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} className='w-[3rem]' alt="logo" />
                    <span className="text-lg font-bold">BIPAY</span>
                </Link>
                <div className="flex items-center gap-6">
                    <div className="cursor-pointer">

                        {/* <Bell /> */}

                        <button type="button" className="relative inline-flex items-center text-sm font-medium text-center rounded-full hover:bg-titan-100 transition-all duration-200 p-1 focus:outline-none">
                            <Bell className='transition-all duration-75' />
                            <span className="sr-only">Notifications</span>

                            <div className="absolute inline-flex z-20 items-center justify-center w-5 h-5 text-[10px] font-medium text-white bg-titan-700 rounded-full -top-[.6rem] -end-3">
                                <CountUp end={20} duration={5} />
                            </div>
                            <span class="flex absolute h-5 w-5 -top-[.6rem] -end-3 -z-1">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-titan-400 opacity-55"></span>
                                <span class="relative inline-flex rounded-full h-5 w-5 bg-titan-500"></span>
                            </span>
                        </button>

                    </div>

                    <div className='cursor-pointer'>
                        <img src={Profile} alt="Profile" className='w-8 h-8 object-cover object-top  rounded-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
