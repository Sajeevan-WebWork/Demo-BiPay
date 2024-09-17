import React from 'react'
import ComponentTitle from '../../../../Components/ComponentTitle'
import { FilePen, Settings } from 'lucide-react';

const tableHeader = [
  "Event name",
  "Notification channel",
  "Templates",
  "Action",
]

const events = [
  {
    eventName: "Wainscot & Willow",
    notificationChannel: "Permit to Move",
    templates: "Update",
  },
  {
    eventName: "Velvet On Marble",
    notificationChannel: "Piling Works",
    templates: "Update",
  },
  {
    eventName: "Élan",
    notificationChannel: "Radiation work",
    templates: "Update",
  },
  {
    eventName: "The Emerald Owl",
    notificationChannel: "Use of explosive tools",
    templates: "Update",
  },
  {
    eventName: "Be Our Guest",
    notificationChannel: "Confined Space",
    templates: "Update",
  },
  {
    eventName: "Silver Thread",
    notificationChannel: "Hydrostatic Test",
    templates: "Update",
  }
];


const Notification = () => {
  return (
    <div className='pl-6 pt-6'>
      <ComponentTitle title={'Notification'} />

      <div className="mt-4">


        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-base text-gray-700 font-normal capitalize bg-gray-50 ">
              <tr>
                {tableHeader.map((list, index) => (
                  <th scope="col" className="px-6 py-3 font-medium border-r-2" key={index}>
                    {list}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((item, index) => (
                <tr className="bg-white border-b hover:bg-titan-100 transition-all duration-300 h-14" key={index} >
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                    {item.eventName}
                  </td>

                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                    {item.notificationChannel}
                  </td>

                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                    <div className="flex items-center gap-3">
                    <FilePen size={20} className='text-blue-500' />
                    {item.templates}
                    </div>
                  </td>

                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                  <Settings size={20} className='text-slate-700' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Notification
