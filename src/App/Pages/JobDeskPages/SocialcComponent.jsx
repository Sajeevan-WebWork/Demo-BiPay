import React from 'react'
import ComponentTitle from '../../../Components/ComponentTitle'
import { Phone } from 'lucide-react'
import BgPrimaryButton from '../../../Components/BgPrimaryButton'
import OutlinedButton from '../../../Components/OutlinedButton'

const SocialcComponent = () => {
  return (
    <>
    <ComponentTitle title={'Social'} />

    <div className="flex flex-col gap-4 my-5">
        <div className="flex items-center">
          <div className="flex gap-2 w-1/6">
            <p className='text-sm text-slate-700'>Instagram</p>
          </div>
          <input type="text" className=' text-titan-950 h-10 px-5  border-2 rounded-md placeholder:text-sm placeholder:font-light' placeholder='Paste link here' name="" id="" />

        </div>
        <div className="flex items-center">
          <div className="flex gap-2 w-1/6">
            <p className='text-sm text-slate-700'>Twitter</p>
          </div>

          <input type="text" className='text-titan-950 h-10 px-5  border-2 rounded-md placeholder:text-sm placeholder:font-light' placeholder='Paste link here' name="" id="" />
        </div>

        <div className="flex items-center">
          <div className="flex gap-2 w-1/6">
            <p className='text-sm text-slate-700'>Facebook</p>
          </div>

          <input type="text" className='text-titan-950  h-10 px-5 border-2 rounded-md placeholder:text-sm placeholder:font-light' placeholder='Paste link here' name="" id="" />
        </div>
      </div>

      <div className="flex gap-2 my-6">
        <BgPrimaryButton text={"Save"} Icon={''} btnStyle={'px-6 py-2  shadow border-0'} />
        <OutlinedButton text={'Cancel'} btnStyle={'px-6 py-2 shadow bg-slate-200 border-0'} />
      </div>
    </>
  )
}

export default SocialcComponent
