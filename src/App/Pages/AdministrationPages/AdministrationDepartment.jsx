import React from 'react'
import AdministrationTable from '../../../Components/AdministrationTable';

const AdministrationDepartment = () => {
  const headerList = [
    "Role Name",
    "Permission",
    "Users",
    "ManageUsers",
  ];
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div className="flex border-[1px] border-titan-400 rounded-lg">
          <span className='text-xs cursor-pointer hover:bg-titan-200 transition-all duration-500 font-normal hover:border-titan-200 border-titan-200 px-1 pl-3 border-r-2 py-1 bg-titan-200 rounded-s-lg'>Apply between</span>
          <span className='text-xs cursor-pointer hover:bg-titan-200 transition-all duration-500 font-normal hover:border-titan-200 px-2 border-r-2 py-1'>Department</span>
          <span className='text-xs cursor-pointer hover:bg-titan-200 transition-all duration-500 font-normal hover:border-titan-200 px-2 border-r-2 py-1'>Work shift</span>
          <span className='text-xs cursor-pointer hover:bg-titan-200 transition-all duration-500 font-normal hover:border-titan-200 px-2 border-r-2 py-1'>Rejected</span>
          <span className='text-xs cursor-pointer hover:bg-titan-200 transition-all duration-500 font-normal px-2 pr-3 py-1 rounded-e-lg'>Duration</span>
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
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border-2 transition-all duration-500 border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-titan-500 focus:border-titan-500" placeholder="Search" required />
      </div>

      {/* <LeaveDataTable headerList={headerList} /> */}
      <AdministrationTable headerList={headerList} />
    </>
  )
}

export default AdministrationDepartment
