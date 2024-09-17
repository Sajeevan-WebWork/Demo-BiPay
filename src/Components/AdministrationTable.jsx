import React from 'react'
import { AdministrationTableData } from '../UserData/TableDatas'

const AdministrationTable = ({ headerList }) => {
    return (
        <>
            <div className="relative overflow-auto w-full my-4">
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
                        {
                            AdministrationTableData.map((user, index) => (
                                <tr key={index} className='bg-white border-b w-full break-words relative'>
                                <td className="px-6 py-4 font-medium text-xs text-gray-900 whitespace-nowrap">
                                        <div className="flex  items-center">
                                            <img src={user.Profile.ProfileImg} alt={`${user.Profile.name}'s profile`} className="w-7 h-7 rounded-full object-cover inline-block mr-2" />
                                            {user.Profile.Name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-xs">{user.Permission}</td>
                                    <td className="px-6 py-4 font-medium text-xs">{user.Users}</td>
                                    <td className="px-6 py-4 font-medium text-xs text-end"><user.ManageUsers size={18} /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdministrationTable
