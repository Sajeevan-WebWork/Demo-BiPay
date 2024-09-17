import React from 'react'
import ComponentTitle from '../../../Components/ComponentTitle'
import BgPrimaryButton from '../../../Components/BgPrimaryButton'
import OutlinedButton from '../../../Components/OutlinedButton'

const AddressComponent = () => {
  return (
    <div>
      <ComponentTitle title={'Address'} />
      <div className="flex flex-col gap-4 my-6">
        <div className="flex flex-col">
          <label htmlFor="" className='text-base font-light'>Permanent address</label>
          <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border-2 transition-all duration-500 border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-titan-500 focus:border-titan-500 mt-3" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className='text-base font-light'>Current address</label>
          <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border-2 transition-all duration-500 border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-titan-500 focus:border-titan-500 mt-3" placeholder="4140 Parker Rd. Allentown, New Mexico 31134" required />
        </div>

        <div className="flex gap-2 my-4">
          <BgPrimaryButton text={"Save"} Icon={''} btnStyle={'px-6 py-2  shadow border-0'} />
          <OutlinedButton text={'Cancel'}  btnStyle={'px-6 py-2 shadow bg-slate-200 border-0'} />
        </div>
      </div>
    </div>
  )
}

export default AddressComponent
