import React, { useState } from 'react'
import BgPrimaryButton from '../../Components/BgPrimaryButton'
import {ChevronRight, Plus} from 'lucide-react'
import Profile from '../../../public/Profile.jpg'
import JobDeskDetails from '../../Components/JobDeskDetails'
import JobDeskUserProfile from '../../Components/JobDeskUserProfile'
import PageBreadcrumbs from '../../Components/Breadcrumbs'


const JobDeskPage = () => {
  const [currentNavItem, setcurrentNavItem] = useState('')
  console.log();

  const handleNavItemClck = (navItem) => {
    setcurrentNavItem(navItem)
  }
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          {/* <div className="flex gap-2">
            <p className="text-sm text-slate-400 cursor-pointer">Job Desk</p>
            <ChevronRight size={20} className='text-slate-400' />
            <p className='text-sm text-slate-800 cursor-pointer capitalize'>
              {currentNavItem || 'Allowance'}
            </p>
          </div> */}
          <PageBreadcrumbs />
          <h1 className="text-xl font-semibold">Job Desk</h1>
        </div>
        <div className="flex gap-4">
          <BgPrimaryButton text="Action" Icon={Plus} />
        </div>
      </div>

      <div className="flex justify-center items-start gap-5 w-full my-5">
        <JobDeskUserProfile />
        <JobDeskDetails onNavItemClick={handleNavItemClck} />
      </div>
    </>
  )
}

export default JobDeskPage
