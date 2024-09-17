import React, { useState } from 'react'
import JobDeskComponentHeader from '../../../Components/JobDeskComponentHeader'
import { Calendar } from 'lucide-react'
import ModalPopup from '../../../Components/ModalPopup';
import DataTableComponent from '../../../Components/DataTableComponent';
import { SlipTableData } from '../../../UserData/TableDatas';

const SlipTableHeader = [
  "Payrun",
  "Period",
  "PayrunType",
  "Status",
  "Salary",
  ];

const SlipComponent = () => {
  return (
    <div>
    <JobDeskComponentHeader title={'Slip'} btnText={'Select Date'} Icon={Calendar}  />

    <div className="border-[1px] border-slate-300 p-4 rounded-lg grid grid-cols-3 my-4">
        <div className="flex flex-col border-r-2 border-slate-300 pl-4">
          <h5 className='text-base font-medium'>24</h5>
          <p className='text-xs font-normal text-slate-500'>Total Payslip</p>
        </div>

        <div className="flex flex-col border-r-2 border-slate-300 pl-4">
          <h5 className='text-base font-medium'>6</h5>
          <p className='text-xs font-normal text-slate-500'>Payslip Sent</p>
        </div>

        <div className="flex flex-col px-8">
          <h5 className='text-base font-medium'>2</h5>
          <p className='text-xs font-normal text-slate-500'>Conflicted Payslip</p>
        </div>
      </div>

      <DataTableComponent tableHeader={SlipTableHeader} tableList={SlipTableData} />
    </div>
  )
}

export default SlipComponent
