import React, { useState } from 'react'
import ComponentTitle from '../../../Components/ComponentTitle'
import { TriangleAlert, X } from 'lucide-react'

const PayRunComponent = () => {
  const [isMondalVisible, setIsModalVisible] = useState(true)
  const closeModal = () => {
    setIsModalVisible(false)
  }
  return (
    <>
    <div className='h-screen'>
      <ComponentTitle title={'Pay Run'} />

      {isMondalVisible && (
      <div className="p-4 bg-blue-100 border-2 my-4 border-blue-200 rounded-md">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center gap-3">
            <TriangleAlert color='#2d64b0' />
            <h3 className='text-base font-semibold'>Allowance Policy</h3>
          </div>
          <X color='#2d64b0' onClick={closeModal} className='cursor-pointer' />
        </div>
        <div className='ml-12'>
          <ul className='list-decimal	'>
            <li className='text-sm font-light'>By default all payrun and beneficiary badges is set from default setting</li>
            <li className='text-sm font-light'>You can individually update or change these values from the edit option.</li>
          </ul>
        </div>
      </div>
      )}

      <div className="flex flex-1 gap-2">
        <div className="flex flex-col flex-1">
          <form className=" w-full flex-1">
            <label for="countries" className="block mb-2 text-sm font-normal text-gray-900">Payrun period</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5">
              <option selected>Monthly</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>

        <div className='flex-1'>
          <div className="flex items-center justify-between">
            <label for="first_name" className="block mb-2 text-sm font-normal text-gray-900">Bonus</label>
            <label for="first_name" className="block mb-2 text-sm font-light text-gray-900">(Allowance)</label>
          </div>
          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="10 %" required />
        </div>

        <div className='flex-1'>
          <div className="flex items-center justify-between">
            <label for="first_name" className="block mb-2 text-sm font-medinormalum text-gray-900">Tax</label>
            <label for="first_name" className="block mb-2 text-sm font-light text-gray-900">(Deduction)</label>
          </div>
          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="1.5 %" required />
        </div>
      </div>
    </div>
    </>

  )
}

export default PayRunComponent
