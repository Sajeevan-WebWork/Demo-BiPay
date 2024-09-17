import React from 'react'
import EmployeeData from '../UserData/EmployeeTableData';

const tableHeader = [
  "Profile",
  "ID",
  "Status",
  "Department",
  "Shift",
  "Joining date",
  "Role",
];

const EmployeeDataTable = () => {
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
                        {EmployeeData.map((employee, index) => {
                            let isStartus = "px-6 py-4 text-xs"

                            if (employee.Status === "Part-time") {
                                isStartus = "text-yellow-600"
                            } else if (employee.Status === "On-contract") {
                                isStartus = "text-blue-600"
                            } else if (employee.Status === "Full-time") {
                                isStartus = "text-green-600"
                            }

                            return (
                                <tr key={index} className="bg-white border-b w-full break-words">
                                    <td className="px-6 py-4 font-medium text-xs text-gray-900 whitespace-nowrap">
                                        <div className="flex  items-center">
                                            <img src={employee.Profile.profileImg} alt={`${employee.Profile.name}'s profile`} className="w-7 h-7 rounded-full object-cover inline-block mr-2" />
                                            {employee.Profile.name}

                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-xs">{employee.id}</td>
                                    <td className={`px-6 py-4 font-medium text-xs ${isStartus}`}>{employee.Status}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{employee.Department}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{employee.Shift}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{employee.Joiningdate}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{employee.Role}</td>
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

export default EmployeeDataTable
