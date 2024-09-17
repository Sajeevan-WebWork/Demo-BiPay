import React from 'react'
import userLeaveData from '../UserData/LeaveData'
import CountUp from 'react-countup';

const LeaveOverview = () => {
    return (
        <>
            <div className="my-4 bg-white p-6 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 dashboard__leave__overview lg:gap-0 sm:gap-4">
                {userLeaveData.map((data, index) => (
                    <div className="flex flex-col gap-2 border-r-2 pl-6 last:border-r-0" key={index}>
                        <p className='text-base font-noraml text-slate-900'>{data.leaveTitle}</p>
                        <h2 className='text-2xl font-medium text-titan-600'>
                        <CountUp end={data.count} duration={1} />
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className='text-sm font-noraml text-slate-500'>Paid</span>
                                <small className='text-sm font-medium text-titan-950'>{data.paidLeaveCount}</small>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className='text-sm font-noraml text-slate-500'>Unpaid</span>
                                <small className='text-sm font-medium text-red-500'>{data.unpaidLeaveCount}</small>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default LeaveOverview
