import React from 'react'
import { AttendanceDetailsData } from '../UserData/TableDatas';

const tableHeader = [
    "Profile",
    "January",
    "February",
    "March",
    "April",
    "May1",
    "May2",
    "May3",
    "May4",
    "May5",
    "May6",
    "May7",
    "May8",
  ];
const AttendanceDetailsTable = () => {
    return (
        <>
            <div className="relative overflow-x-auto w-full my-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 capitalize bg-gray-50">
                        <tr>
                            {tableHeader.map((header, index) => (
                                <th key={index} scope="col" className="px-6 py-3">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {AttendanceDetailsData.map((list, index) => {
                        

                            return (
                                <tr key={index} className="bg-white border-b w-full break-words">
                                    <td className="px-6 py-4 font-medium text-xs text-gray-900 whitespace-nowrap">
                                        <div className="flex  items-center">
                                            <img src={list.Profile.profileImg} alt={`${list.Profile.name}'s profile`} className="w-7 h-7 rounded-full object-cover inline-block mr-2" />
                                            {list.Profile.name}

                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.January}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.February}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.March}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.April}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.May1}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.May2}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.May3}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.May4}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.May5}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.May6}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.May7}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{list.attendance.May8}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className="flex gap-2 justify-end">
                <div className="flex">
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        Previous
                    </a>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        Next
                    </a>
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-sm items-end justify-end">
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default AttendanceDetailsTable
