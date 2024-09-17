import React from 'react'
import ComponentTitle from '../../../Components/ComponentTitle'
import { historyData } from '../../../UserData/TableDatas'

const HistoryComponent = () => {
  return (
    <>
      <ComponentTitle title={'History'} />
      <div className="flex flex-col gap-4 my-4">
        {historyData.map((item, index) => (
          <div className="flex flex-col gap-2 bg-titan-50 hover:bg-titan-200 transition-all cursor-pointer rounded-xl p-4" key={index}>
            <h3 className="text-base font-semibold">{item.title}</h3>
            {item.list.map((detail, detailIndex) => (
              <div className="flex gap-2 my-3" key={detailIndex}>
                <p className='text-sm font-light border-r-2 px-6 first:pl-0'>{detail.jobTime}</p>
                <p className='text-sm font-light border-r-2 px-6'>{detail.jobType}</p>
                <p className='text-sm font-light px-6'>{detail.years}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default HistoryComponent
