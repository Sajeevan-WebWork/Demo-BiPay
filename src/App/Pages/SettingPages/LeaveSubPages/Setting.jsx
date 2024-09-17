import React, { useState } from 'react'
import ComponentTitle from '../../../../Components/ComponentTitle'
import { FilePen, Pencil, Trash2, TriangleAlert, X } from 'lucide-react'
import InputField from '../../../../TagComponents/InputField';
const tableHeader = [
  "Name",
  "Type",
  "Amount",
  "Enabled",
  "Allow monthly earning",
  "Action"
]
const tableData = [
  {
    name: "Jeremy Neigh",
    type: "Melnichenko Alexandr",
    amount: "Design",
    enabled: "Active",
    allowMonthlyEarning: false,
    action: { edit: true, delete: true }
  },
  {
    name: "Annette Black",
    type: "Shurenkova Larisa",
    amount: "Product",
    enabled: "Inactive",
    allowMonthlyEarning: true,
    action: { edit: true, delete: true }
  },
  {
    name: "Theresa Webb",
    type: "Kachurovskiy Vadim",
    amount: "Marketing",
    enabled: "Inactive",
    allowMonthlyEarning: false,
    action: { edit: true, delete: true }
  },
  {
    name: "Kathryn Murphy",
    type: "Nebrat Eugene",
    amount: "Support",
    enabled: "Active",
    allowMonthlyEarning: true,
    action: { edit: true, delete: true }
  },
  {
    name: "Courtney Henry",
    type: "Shevchenko Oleg",
    amount: "Operations",
    enabled: "Active",
    allowMonthlyEarning: true,
    action: { edit: true, delete: true }
  },
  {
    name: "Jane Cooper",
    type: "Kiseleva Olga",
    amount: "HR",
    enabled: "Inactive",
    allowMonthlyEarning: false,
    action: { edit: true, delete: true }
  }
];


const Setting = () => {
  const [isModalVisible, setModalVisiable] = useState(true)

  const isModalShow = () => {
    setModalVisiable(false)
  }
  return (
    <div className="pl-6 pt-6">
      <ComponentTitle title={"Leave Type"} />

      {isModalVisible && (
        <div className="p-4 my-6 bg-orange-100 border-2 border-orange-200 rounded-md w-3/4 transition-all">
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-3">
              <TriangleAlert color="#F0B732" />
              <h3 className="text-base font-semibold">Note</h3>
            </div>
            <X color="#F0B732" onClick={isModalShow} className="cursor-pointer" />
          </div>
          <div className="ml-12">
            <ul className="list-decimal">
              <li className="text-base font-normal py-1">Any type of change will be effective on the next day.</li>
              <li className="text-base font-normal py-1">To understand how leave settings work, please checkout the documentation.</li>
              <li className="text-base font-normal py-1">You must setup the cron job in your hosted server for assigning work shift, generating payslip, sending bulk emails, assigning leaves and renew holidays.</li>
              <li className="text-base font-normal py-1">Remained leave will not carry forward to next leave year.</li>
            </ul>
          </div>
        </div>
      )}

<div>
        <form className="w-3/6 mt-2 mb-6">
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
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-base text-gray-700 font-normal capitalize bg-gray-50 ">
            <tr>
              {tableHeader.map((list, index) => (
                <th scope="col" className="px-6 py-3 font-medium border-r-2" key={index}>
                  {list}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr className="bg-white border-b hover:bg-titan-100 transition-all duration-300 h-14" key={index} >
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                  {item.name}
                </td>

                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                  {item.type}
                </td>

                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                  <div className="flex items-center gap-3">
                    {/* <FilePen size={20} className='text-blue-500' /> */}
                    {item.amount}
                  </div>
                </td>

                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                  {item.enabled}
                </td>

                <td scope="row" className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap">


                  <div className="inline-flex items-center">
                    <label className="flex items-center cursor-pointer relative">
                      <input type="checkbox" checked={item.allowMonthlyEarning} className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-titan-500 checked:bg-titan-700 checked:border-titan-800" id="check" />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </td>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                  <div className="flex gap-2 items-center">
                    <Pencil size={18} />
                    <Trash2 size={18} color='red' />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Setting
