import React from 'react'
import ModalPopup from './ModalPopup'

const FolderTableData = [
    {
        Name: "15 May 2020 9:00 am",
        Attachments: "dealsheet_mckee.jpg",
        AddedBy: "Paid",
    },

    {
        Name: "15 May 2020 8:30 am",
        Attachments: "debitnote_0311.xlsx",
        AddedBy: "Pending",
    },

    {
        Name: "15 May 2020 9:30 am",
        Attachments: "McKeePoP013.pdf",
        AddedBy: "Paid",
    },

    {
        Name: "15 May 2020 8:00 am",
        Attachments: "dealsheet2020.pdf",
        AddedBy: "Pending",
    },

    {
        Name: "15 May 2020 8:00 am",
        Attachments: "dealsheet_march.xlsx",
        AddedBy: "Pending",
    },
]

const FolderDataTable = () => {
    return (
        <div>
            <div className="bg-white w-full rounded-md dashboard__announcement_tablet">
                <div className="">
                    <div className="relative overflow-auto">
                        <table className="w-full text-sm text-left rtl:text-right my-6">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="text-xs px-4 py-3 text-nowrap"> Name </th>
                                    <th scope="col" className="text-xs px-4 py-3 text-nowrap"> Attachments </th>
                                    <th scope="col" className="text-xs px-4 py-3 text-nowrap"> Added by </th>
                                </tr>
                            </thead>
                            <tbody>
                                {FolderTableData.map((item, index) => {

                                    let StatusStyle = 'px-2 py-2 text-xs font-light text-gray-900 whitespace-nowrap'

                                    if (item.Status === "Paid") {
                                        StatusStyle = "text-blue-400"
                                    } else if (item.Status === "Pending") {
                                        StatusStyle = "text-orange-600"
                                    }
                                    return (
                                        <tr className="bg-white cursor-pointer hover:bg-slate-100 transition-all  dark:border-gray-700" key={index}>
                                            <td className="px-4 py-4 text-xs font-light text-gray-900 whitespace-nowrap">{item.Name}</td>
                                            <td className="px-4 py-4 text-xs font-light text-gray-900 whitespace-nowrap">{item.Attachments}</td>
                                            <td className={`px-4 py-4 text-xs font-ligh whitespace-nowrap ${StatusStyle}`}>{item.AddedBy}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <div>
                            <div className="flex">
                                <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
                                    Previous
                                </a>

                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
                                    Next
                                </a>
                            </div>
                        </div>

                        <div>
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex -space-x-px text-sm">
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Previous</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
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
                    </div>

                </div>
            </div>

            <ModalPopup />
        </div>
    )
}

export default FolderDataTable
