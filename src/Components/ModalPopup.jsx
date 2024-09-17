import React from 'react';
import BgPrimaryButton from './BgPrimaryButton';
import OutlinedButton from './OutlinedButton';
import InputField from '../TagComponents/InputField';

const ModalPopup = ({ closeModal }) => {
    return (
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 flex items-center transition-all backdrop-blur-sm justify-center z-50 w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Add Document
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
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                {/* <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Name" required /> */}
                                <InputField  Type={''} Name={'name'} Id={'name'} PlaceHolder={'Enter Name'} />
                            </div>
                            <div>
                                <label htmlFor="password" className="mb-2 text-sm flex justify-between font-medium text-gray-900">
                                    <span>Document</span>
                                    <span className='text-xs font-light'>Max: 10 MB</span>
                                </label>
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-10 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                        <div className="flex gap-4 items-center justify-center pt-5 pb-6">
                                            <svg className="w-5 h-5  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="text-xs text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>

                            <div className="flex gap-2 my-4">
                            <BgPrimaryButton text={"Save"}  Icon={''} btnStyle={'px-6 py-2  shadow border-0'}/>
                            <OutlinedButton text={'Cancel'} onButtonClick={closeModal} btnStyle={'px-6 py-2 shadow bg-slate-200 border-0'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPopup;
