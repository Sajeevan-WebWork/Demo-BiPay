import React from 'react'
import ComponentTitle from './ComponentTitle'
import AnnouncementsTabletData from '../UserData/AnnouncementsTabletData'

const AnnouncementsTablet = () => {
    return (
        <>
            <div className="my-4 bg-white p-6 rounded-md dashboard__announcement_tablet">
                <ComponentTitle title={"Announcements"} />

                <div className="">


                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-2 my-6">
                            <thead className="text-xs text-gray-700 capitalize bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Start Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        End Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {AnnouncementsTabletData.map((item, index) => (
                                <tr className="bg-white cursor-pointer hover:bg-slate-100 transition-all  dark:border-gray-700" key={index}>
                                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap font-normal">
                                        {item.title}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap font-normal">
                                        {item.Startdate}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap font-normal">
                                        {item.EndDate}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap font-normal">
                                        {item.Description}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AnnouncementsTablet
