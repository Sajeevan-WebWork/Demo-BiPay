import React from 'react'
import ComponentTitle from '../../../../Components/ComponentTitle'
import InputField from '../../../../TagComponents/InputField'
import { ChevronDown, Paperclip } from 'lucide-react'
import OutlinedButton from '../../../../Components/OutlinedButton'
import BgPrimaryButton from '../../../../Components/BgPrimaryButton'

const Default = () => {
  return (
    <div>
      <div className="pl-6 pt-6">
        <ComponentTitle title={'Company info'} />
        <div className="w-full py-5">
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <label htmlFor="CompanyName" className='text-base font-normal capitalize'>Company name</label>
              <InputField Type='text' Name='CompanyName' Id='CompanyName' Style='py-3 rounded-md' PlaceHolder='Company name' />
            </div>

            <div className="flex py-6 gap-6">
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Companylogo" className='text-base font-normal capitalize'>Company Logo</label>
                    <p className='text-base font-light capitalize'>Recommended size: 210 x 50 px</p>
                  </div>
                  <div className="relative">
                    <InputField Type='file' hidden={true} Name='Companylogo' Id='Companylogo' Style='py-3 rounded-md' PlaceHolder='Company name' />
                    <Paperclip size={16} className='absolute top-4 right-4 text-slate-500' />
                  </div>
                </div>
              </div>
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Companyicon" className='text-base font-normal capitalize'>Company icon</label>
                    <p className='text-base font-light capitalize'>Recommended size: 50 x 50 px</p>
                  </div>
                  <div className="relative">
                    <InputField Type='file' hidden={true} Name='Companyicon' Id='Companyicon' Style='py-3 rounded-md' PlaceHolder='Company name' />
                    <Paperclip size={16} className='absolute top-4 right-4 text-slate-500' />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex py-6 gap-6">
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Companybanner" className='text-base font-normal capitalize'>Company banner</label>
                    <p className='text-base font-light capitalize'>Recommended size: 1920 x 1080 px</p>
                  </div>
                  <div className="relative">
                    <InputField Type='file' hidden={true} Name='Companybanner' Id='Companybanner' Style='py-3 rounded-md' PlaceHolder='Company name' />
                    <Paperclip size={16} className='absolute top-4 right-4 text-slate-500' />
                  </div>
                </div>
              </div>
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Language" className='text-base font-normal capitalize'>Language</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='Language' Id='Language' Style='py-3 rounded-md' PlaceHolder='Language' />
                    <ChevronDown size={20} className='absolute top-4 right-4 text-slate-500' />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="p-4 py-3">
        <ComponentTitle title={'Company info'} />
        <div className="w-full py-5">
          <div className="w-full">

            <div className="flex py-6 gap-6">
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Country" className='text-base font-normal capitalize'>Country</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='Country' Id='Country' Style='py-3 rounded-md' PlaceHolder='Country' />
                    <ChevronDown size={20} className='absolute top-4 right-4 text-slate-500' />
                  </div>
                </div>
              </div>
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Area" className='text-base font-normal capitalize'>Area</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='Area' Id='Area' Style='py-3 rounded-md' PlaceHolder='Area' />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex py-6 gap-6">
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="City" className='text-base font-normal capitalize'>City</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='City' Id='City' Style='py-3 rounded-md' PlaceHolder='City' />
                  </div>
                </div>
              </div>
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="State" className='text-base font-normal capitalize'>State</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='State' Id='State' Style='py-3 rounded-md' PlaceHolder='State' />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex py-6 gap-6">
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Zipcode" className='text-base font-normal capitalize'>Zip code</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='Zipcode' Id='Zipcode' Style='py-3 rounded-md' PlaceHolder='Zip code' />
                  </div>
                </div>
              </div>
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Language" className='text-base font-normal capitalize'>Address</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='Address' Id='Address' Style='py-3 rounded-md' PlaceHolder='Address' />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="p-4 py-3">
        <ComponentTitle title={'Date and time setting'} />
        <div className="w-full py-5">
          <div className="w-full">

            <div className="flex py-6 gap-6">
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Dateformat" className='text-base font-normal capitalize'>Date format</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='Dateformat' Id='Dateformat' Style='py-3 rounded-md' PlaceHolder='Date format' />
                    <ChevronDown size={20} className='absolute top-4 right-4 text-slate-500' />
                  </div>
                </div>
              </div>
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Timeformat" className='text-base font-normal capitalize'>Time format</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='Timeformat' Id='Timeformat' Style='py-3 rounded-md' PlaceHolder='Time format' />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="p-4 py-3">
        <ComponentTitle title={'Currency setting'} />
        <div className="w-full py-5">
          <div className="w-full">

            <div className="flex py-6 gap-6">
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Currencysymbol" className='text-base font-normal capitalize'>Currency symbol</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='Currencysymbol' Id='Currencysymbol' Style='py-3 rounded-md' PlaceHolder='USD' />
                    <ChevronDown size={20} className='absolute top-4 right-4 text-slate-500' />
                  </div>
                </div>
              </div>
              <div className="w-3/6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <label htmlFor="Currency" className='text-base font-normal capitalize'>Currency</label>
                  </div>
                  <div className="relative">
                    <InputField Type='text' Name='Currency' Id='Currency' Style='py-3 rounded-md' PlaceHolder='$' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <BgPrimaryButton btnStyle={'px-8'} text={'Save'} />
            <OutlinedButton btnStyle={'px-8'} text={'Cancel'} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Default
