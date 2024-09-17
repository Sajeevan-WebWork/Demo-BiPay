import React from 'react'
import { Calendar } from 'lucide-react'
import JobDeskComponentHeader from '../../../Components/JobDeskComponentHeader'
import LeaveTabledata from '../../../UserData/LeaveAttendanceTableData';
import DataTableComponent from '../../../Components/DataTableComponent';

const tableHeader = [
"Datetime",
"LeaveDuration",
"LeaveType",
"Attachments",
"Status",
];

const LeaveComponent = () => {
  return (
    <>
      <JobDeskComponentHeader title={'Leave'} btnText={'Select Date'} Icon={Calendar} />

      <div className="border-[1px] border-slate-300 p-4 rounded-lg grid grid-cols-3 my-4">
        <div className="flex flex-col border-r-2 border-slate-300 pl-4">
          <h5 className='text-base font-medium'>16 Days</h5>
          <p className='text-xs font-normal text-slate-500'>Leave taken</p>
        </div>

        <div className="flex flex-col border-r-2 border-slate-300 pl-4">
          <h5 className='text-base font-medium'>2 Days</h5>
          <p className='text-xs font-normal text-slate-500'>Upcoming leave</p>
        </div>

        <div className="flex flex-col px-8">
          <h5 className='text-base font-medium'>32</h5>
          <p className='text-xs font-normal text-slate-500'>Pending request</p>
        </div>
      </div>
      <DataTableComponent tableHeader={tableHeader} tableList={LeaveTabledata} />

    </>
  )
}

export default LeaveComponent
