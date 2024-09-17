import React from 'react'
import ComponentTitle from '../../../Components/ComponentTitle'
import { SalaryData } from '../../../UserData/TableDatas'


const SalaryComponent = () => {
  return (
    <div>
    <ComponentTitle title={'Salary'} />

    <div className="flex flex-col gap-4 my-4">
        {SalaryData.map((item, index) => (
          <div className="flex flex-col gap-2 border-b-2 last:border-0 rounded-xl p-4" key={index}>
          <p className='text-sm font-light text-slate-500'>Amount</p>
            <h3 className="text-2xl font-medium text-green-700">${item.amount}</h3>
            {item.list.map((detail, index) => (
              <div className="flex gap-2 my-3 " key={index}>
              <div className="flex flex-col gap-2">
                <span className='text-xs font-normal text-slate-500'>To</span>
                <p className='text-sm font-light pr-6 border-r-2 first:pl-0'>{detail.to}</p>
              </div>
              <div className="flex flex-col gap-2 px-6">
                <span className='text-xs font-normal text-slate-500'>Date</span>
                <p className='text-sm font-light pr-6 border-r-2'>{detail.Date}</p>
              </div>
              <div className="flex flex-col gap-2 px-6">
                <span className='text-xs font-normal text-slate-500'>Payment code</span>
                <p className='text-sm font-light'>{detail.Paymentcode}</p>
              </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SalaryComponent
