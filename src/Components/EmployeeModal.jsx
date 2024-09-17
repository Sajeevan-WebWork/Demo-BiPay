
import React from 'react'
import BgPrimaryButton from './BgPrimaryButton'
import OutlinedButton from './OutlinedButton'
import InputField from '../TagComponents/InputField'

const EmployeeModal = ({ closeModal, modalTitle, firstInput, secondInput }) => {
    return (
        <>
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {modalTitle}
                            </h3>
                            <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-titan-100 transition-all hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">{firstInput}</label>
                                    <InputField  Type={''} Name={'name'} Id={'name'} PlaceHolder={`Enter ${firstInput}`} />
                                </div>
                                <div>
                                    <label htmlFor="designation" className="mb-2 text-sm flex justify-between font-medium text-gray-900">
                                        <span>{secondInput}</span>
                                    </label>
                                    <InputField  Type={''} Name={'designation'} Id={'designation'} PlaceHolder={`Enter ${secondInput}`} />
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

export default EmployeeModal;