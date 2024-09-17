import React from 'react'
import BgPrimaryButton from './BgPrimaryButton'
import OutlinedButton from './OutlinedButton'

const AttendanceModal = ({closeModal}) => {
  return (
    <>
    <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 flex items-center transition-all backdrop-blur-sm justify-center z-50 w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
        <div className="relative p-4 w-full max-w-xl max-h-full">
            <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">
                    Add Attendance
                    </h3>
                    <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-titan-100 transition-all hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5">
                    <form className="space-y-4" action="#">
                        <div className="w-full">
                            <div>
                                <label htmlFor="employee" className="block mb-2 text-sm font-medium text-gray-900">Employee</label>
                                <input type="text" name="employee" id="employee" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-titan-500 focus:border-titan-500 block w-full p-2.5" placeholder="Enter Name" required />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-6/12">
                                <div>
                                    <label htmlFor="Punchin" className="block mb-2 text-sm font-medium text-gray-900">Punch in</label>
                                    <input type="text" name="date" id="date" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-titan-500 focus:border-titan-500 block w-full p-2.5" placeholder="Chosse Date" required />

                                </div>
                            </div>
                            <div className="w-6/12">
                                <div>
                                    <label htmlFor="Punchout" className="block mb-2 text-sm font-medium text-gray-900">Punch out</label>
                                    <input type="text" name="Punchout" id="Punchout" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-titan-500 focus:border-titan-500 block w-full p-2.5" placeholder="Chosse Date" required />
                                </div>
                            </div>
                        </div>


                        <div className="w-full">
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 focus:outline-none border-gray-300 focus:ring-titan-500 focus:border-titan-500 " placeholder="Reason note"></textarea>
                        </div>


                        <div className="flex gap-2 my-4">
                            <BgPrimaryButton text={"Save"} Icon={''} btnStyle={'px-6 py-2  shadow border-0'} />
                            <OutlinedButton text={'Cancel'} onButtonClick={closeModal} btnStyle={'px-6 py-2 shadow bg-slate-200 border-0'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default AttendanceModal
