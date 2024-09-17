import React from 'react'
import ComponentTitle from '../../../../Components/ComponentTitle'
import BgPrimaryButton from '../../../../Components/BgPrimaryButton'
import OutlinedButton from '../../../../Components/OutlinedButton'
const checklist = [
  "Job Desk",
  "Employee",
  "Attendance",
  "Leave",
  "Payroll",
  "Administration",
  "Assets"
]

const Module = () => {
  return (
    <div className='pl-6 pt-6'>
      <ComponentTitle title={'Module List'} />

      <div className="pt-8 pl-4">
        <p className='text-base font-normal'>
          Only selected items will be shown on the sidebar along with Dashboard and Settings.
        </p>
        <div className="flex flex-col gap-4 my-4">
        {checklist.map((list, index) => (

          <div className="flex items-center" key={index}>
            <input id={list} checked={list === "Assets" ? true : ''} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-titan-500 accent-titan-600 focus:ring-2 " />
            <label htmlFor={list} className="ms-2 text-sm font-medium text-gray-500" > {list} </label>
          </div>
        ))}
        </div>
      </div>

      <div className="flex gap-4 my-5">
            <BgPrimaryButton btnStyle={'px-8'} text={'Save'} />
            <OutlinedButton btnStyle={'px-8'} text={'Cancel'} />
          </div>
    </div>
  )
}

export default Module
