import React, { useMemo } from 'react';
import { FilePlus2 } from 'lucide-react';
import LeaveDataTable from '../../../Components/LeaveDataTable';
import { useLocation } from 'react-router-dom';

const LeaveStatus = () => {
  const location = useLocation();

  const isLeaveRequest = useMemo(() => {
    return location.pathname === "/leave" || location.pathname === "/leave/status";
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
      <div className="flex items-center justify-between">
        <div className="flex border-[1px] border-titan-400 rounded-lg">
          <span className='text-xs cursor-pointer hover:bg-titan-200 transition-all duration-500 font-normal hover:border-titan-200 border-titan-200 px-2 pl-3 border-r-2 py-1 bg-titan-200 rounded-s-lg'>Department</span>
          <span className='text-xs cursor-pointer hover:bg-titan-200 transition-all duration-500 font-normal hover:border-titan-200 px-2 border-r-2 py-1'>Work shift</span>
          <span className='text-xs cursor-pointer hover:bg-titan-200 transition-all duration-500 font-normal hover:border-titan-200 px-2 border-r-2 py-1'>Leave duration</span>
          <span className='text-xs cursor-pointer hover:bg-titan-200 transition-all duration-500 font-normal px-2 pr-3 py-1 rounded-e-lg'>Users</span>
        </div>
        <button className="flex items-center gap-2 relative rounded-md border-[2px] cursor-pointer px-2 py-1">
          <FilePlus2 size={18} />
          <p className="text-sm font-normal">Select Date</p>
        </button>
      </div>

      <div className="border-[1px] border-slate-300 p-4 rounded-lg grid grid-cols-3 my-6">
        <div className="flex flex-col border-r-2 border-slate-300 pl-4">
          <h5 className='text-lg font-medium'>16</h5>
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
          <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border-2 transition-all duration-500 border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-titan-500 focus:border-titan-500" placeholder="Search" required />
        </div>
      </form>

      <LeaveDataTable headerList={headerList} />
    </>
  );
}

export default LeaveStatus;
