import React, { useState } from 'react';
import { leaveUserData } from '../UserData/TableDatas';
import { EllipsisVertical } from 'lucide-react';

const LeaveDataTable = ({ headerList }) => {
    return (
        <div>
            <div className="relative overflow-x-auto w-full my-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 capitalize bg-gray-50">
                        <tr>
                            {headerList.map((header, index) => (
                                <th key={index} scope="col" className="px-6 py-3 whitespace-nowrap">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {leaveUserData.map((leave, index) => (
                            <tr key={index} className="bg-white border-b w-full break-words relative">
                                <td className="px-6 py-4 font-medium text-xs text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img src={leave.Profile.profileImg} alt={`${leave.Profile.name}'s profile`} className="w-7 h-7 rounded-full object-cover inline-block mr-2" />
                                        {leave.Profile.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-xs">{leave.DateTime}</td>
                                <td className="px-6 py-4 font-medium text-xs">{leave.Duration}</td>
                                {headerList.includes("Department") && (
                                    <td className="px-6 py-4 font-medium text-xs">{leave.Department}</td>
                                )}

                                <td className="px-6 py-4 font-medium text-xs">{leave.Type}</td>
                                {headerList.includes("Status") && (
                                    <td className="px-6 py-4 font-medium text-xs">{leave.Status}</td>
                                )}
                                <td className="px-6 py-4 font-medium text-xs">{leave.Attachment}</td>
                                {headerList.includes("Action") && (
                                    <td className="px-6 py-4 font-medium text-xs text-center flex justify-center">
                                        <EllipsisVertical className="cursor-pointer" size={18} />
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className="flex gap-2 justify-end">
                <div className="flex">
                    <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-sm items-end justify-end">
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default LeaveDataTable;
