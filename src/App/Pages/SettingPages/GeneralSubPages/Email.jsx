import React from 'react'
import ComponentTitle from '../../../../Components/ComponentTitle'
import InputField from '../../../../TagComponents/InputField'
import BgPrimaryButton from '../../../../Components/BgPrimaryButton'
import OutlinedButton from '../../../../Components/OutlinedButton'

const Email = () => {
  return (
    <div className='pl-6 pt-6'>
      <ComponentTitle title={'Email'} />
      <div className="w-full mt-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="Email" className='text-base font-normal capitalize'>Email</label>
            <InputField Type='text' Name='Email' Id='Email' Style='py-3 rounded-md' PlaceHolder='Email' />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="API region" className='text-base font-normal capitalize'>API region</label>
            <InputField Type='text' Name='API region' Id='API region' Style='py-3 rounded-md' PlaceHolder='API region' />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="Accesskeyid" className='text-base font-normal capitalize'>Access key id</label>
            <InputField Type='text' Name='Accesskeyid' Id='Accesskeyid' Style='py-3 rounded-md' PlaceHolder='Access key id' />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="Secretaccesskey" className='text-base font-normal capitalize'>Secret access key</label>
            <InputField Type='text' Name='Secretaccesskey' Id='Secretaccesskey' Style='py-3 rounded-md' PlaceHolder='Secret access key' />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="Fromemail" className='text-base font-normal capitalize'>From email</label>
            <InputField Type='text' Name='Fromemail' Id='Fromemail' Style='py-3 rounded-md' PlaceHolder='From email' />
          </div>
        </div>
      </div>

      <div className="flex gap-4 my-6">
            <BgPrimaryButton btnStyle={'px-8'} text={'Save'} />
            <OutlinedButton btnStyle={'px-8'} text={'Cancel'} />
          </div>
    </div>
  )
}

export default Email
