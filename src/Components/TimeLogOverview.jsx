import React from 'react'
import ComponentTitle from './ComponentTitle'
import SliderSizes from './SliderRange'
import ProgressBar from "@ramonak/react-progress-bar";


const TimeLogOverview = () => {
    return (
        <>
            <div className='my-4 bg-white p-6 rounded-md dashboard__timelog__overview'>
                <ComponentTitle title={"Time Log"} />
                <div className="w-full flex items-start relative gap-4">
                    <div className="w-6/12">
                        <h5 className="text-base font-medium py-5">Today</h5>
                        <div className="flex items-center justify-between w-full rounded-lg">
                            <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-md">
                                <h6 className="text-base font-medium">08:00</h6>
                                <p className='text-sm font-noraml'>Scheduled</p>
                            </div>

                            <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-md">
                                <h6 className="text-base font-medium">12:00</h6>
                                <p className='text-sm font-noraml'>Scheduled</p>
                            </div>

                            <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-md">
                                <h6 className="text-base font-medium">05:00</h6>
                                <p className='text-sm font-noraml'>Scheduled</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12">
                        <h5 className="text-base font-medium py-5">This month</h5>
                        <div className="flex justify-between w-full gap-6">
                            <div className="flex flex-col gap-4 w-2/4">
                                <div>
                                    <div className="flex justify-between">
                                        <p>Total</p>
                                        <p>216 hour</p>
                                    </div>
                                    <SliderSizes value={"20"} />
                                </div>

                                <div>
                                    <div className="flex justify-between">
                                        <p>Shortage time</p>
                                        <p>23 hour</p>
                                    </div>
                                    <SliderSizes value={"60"} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 w-2/4">
                                <div>
                                    <div className="flex justify-between">
                                        <p>Worked time</p>
                                        <p>189 hour</p>
                                    </div>
                                    <SliderSizes value={"20"} />
                                </div>

                                <div>
                                    <div className="flex justify-between">
                                        <p>Over time</p>
                                        <p>56 hour</p>
                                    </div>
                                    <SliderSizes value={"90"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeLogOverview
