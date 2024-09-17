import React from 'react'
import ComponentTitle from '../../../Components/ComponentTitle';
import { Phone, TableCellsSplit } from 'lucide-react';
import BgPrimaryButton from '../../../Components/BgPrimaryButton';
import OutlinedButton from '../../../Components/OutlinedButton';
import InputField from '../../../TagComponents/InputField';

const ContactsComponent = () => {
  return (
    <>
      <ComponentTitle title={'Contacts'} />
      <div className="flex flex-col gap-10 my-5">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Phone size={18} />
            <p className='text-sm'>Product manager</p>
          </div>
          <input type="text" className='text-titan-950 h-10 px-5 border-2 border-transparent focus:border-titan-700 cursor-pointer transition-all rounded-sm hover:border-2 hover:border-titan-50 ' name="" id="" value={'+7 (903) 679-96-15'} /> 

        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Phone size={18} />
            <p className='text-sm'>Chief Executive Officer</p>
          </div>

          <input type="text" className='text-titan-950 h-10 px-5 border-2 border-transparent focus:border-titan-700 cursor-pointer transition-all rounded-sm hover:border-2 hover:border-titan-50 ' name="" id="" value={'+7 (903) 679-96-15'} />
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Phone size={18} />
            <p className='text-sm'>Human Resource Manager</p>
          </div>

          <input type="text" className='text-titan-950 h-10 px-5 border-2 border-transparent focus:border-titan-700 cursor-pointer transition-all rounded-sm hover:border-2 hover:border-titan-50 ' name="" id="" value='+7 (903) 880-93-38' />
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <Phone size={18} />
            <p className='text-sm'>Front End Developer</p>
          </div>

          <input type="text" className='text-titan-950 h-10 px-5 border-2 border-transparent focus:border-titan-700 cursor-pointer transition-all rounded-sm hover:border-2 hover:border-titan-50 ' name="" id="" value={'+7 (903) 679-96-15'} />
        </div>

      </div>

      <div className="flex gap-2 my-4">
        <BgPrimaryButton text={"Save"} Icon={''} btnStyle={'px-6 py-2  shadow border-0'} />
        <OutlinedButton text={'Cancel'} btnStyle={'px-6 py-2 shadow bg-slate-200 border-0'} />
      </div>
    </>
  )
}

export default ContactsComponent
