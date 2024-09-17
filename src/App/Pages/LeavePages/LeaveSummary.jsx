import { Calendar } from 'lucide-react'
import React, { useMemo } from 'react'
import LeaveDataTable from '../../../Components/LeaveDataTable'
import { useLocation } from 'react-router-dom';

const LeaveSummary = () => {

  const location = useLocation();

  const isLeaveRequest = useMemo(() => {
    return location.pathname === "/leave" || location.pathname === "/leave/summary";
  }, [location.pathname]);

  // Conditionally add 'Attachment' to the header list based on the pathname
  const headerList = [
    "Profile",
    "Date & Time",
    "Duration",
    "Department",
    "Type",
    "Attachment",
    ...(!isLeaveRequest ? ["Status"] : []),
    ...(!isLeaveRequest ? ["Action"] : []),
  ];
  return (

    <>
      <div className="flex items-center justify-between mb-5">

        <form class="w-52">
          <select id="countries" class="bg-gray-50 border-2 border-titan-500 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-titan-800 focus:border-titan-800 block w-full p-2 ">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>

        <button className="flex items-center gap-2 relative rounded-md border-[2px] cursor-pointer px-2 py-1">
          <Calendar size={18} />
          <p className="text-sm font-normal">Select Date</p>
        </button>
      </div>


      <div className="border-[1px] border-slate-300 p-4 rounded-lg grid grid-cols-3 my-6">
        <div className="flex flex-col border-r-2 border-slate-300 pl-4">
          <h5 className='text-lg font-medium'>12</h5>
          <p className='text-xs font-normal text-slate-500'>Leave employees</p>
        </div>
        <div className="flex flex-col border-r-2 border-slate-300 pl-4">
          <h5 className='text-lg font-medium'>23 hr</h5>
          <p className='text-xs font-normal text-slate-500'>Totals leaves hour</p>
        </div>
        <div className="flex flex-col px-8">
          <h5 className='text-lg font-medium'>6</h5>
          <p className='text-xs font-normal text-slate-500'>On leave</p>
        </div>
      </div>

      <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border-2 transition-all duration-500 border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-titan-500 focus:border-titan-500 " placeholder="Search" required />
        </div>
      </form>

      <LeaveDataTable headerList={headerList} />
    </>

  )
}

export default LeaveSummary
