
import React from 'react'; import { CalendarSearch, ChevronRight, Clock4, FolderDot, Globe, Mail, MailCheck, Phone, Plus, Wallet } from 'lucide-react'
import Profile from '../../public/Profile.jpg'

const userInfo = [
  {
    title: "Admin & HRM",
    category: "Department",
    Icon: FolderDot
  },

  {
    title: "$ 40,000",
    category: "Work Shift",
    Icon: Wallet
  },

  {
    title: "Regular",
    category: "Work Shift",
    Icon: Clock4
  },

  {
    title: "12 February 2023",
    category: "Joining date",
    Icon: CalendarSearch
  },

]

const userContact = [
  {
    title: "Email",
    category: "alwissuryatmaja@gmail.com",
    Icon: MailCheck
  },

  {
    title: "Phone",
    category: "+6282283386756",
    Icon: Phone
  },

  {
    title: "Website",
    category: "https://bit.ly/3uOJF79",
    Icon: Globe
  },
]

const JobDeskUserProfile = () => {
  return (
    <>
      <div className="w-3/12 text-nowrap py-4 bg-white rounded-lg">
        <div className="flex justify-start px-4 pt-4 items-center gap-3">
          <img className="w-12 h-12 rounded-full" src={Profile} alt="Rounded avatar" />
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">Sajeevan</h3>
            <span className='text-sm font-normal text-slate-500'>UX Designer</span>
          </div>
        </div>

        <div className='my-3 p-4'>
          <h5 className="text-base font-medium">Info</h5>

          <div className="flex flex-col pl-6 gap-4 my-4">
            {userInfo.map((info, index) => (
              <div className="flex gap-4" key={index}>
                <div className="p-2 bg-slate-100 rounded-md">
                  <info.Icon size={18} />
                </div>
                <div className="flex flex-col">
                  <h4 className={`text-sm font-medium ${info.title === "$ 40,000" ? "text-green-700" : ""}`}>{info.title}</h4>
                  <p className="text-sm font-normal text-slate-400 break-words">{info.category}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className='my-2 p-4'>
          <h5 className="text-base font-medium">Contact</h5>

          <div className="flex flex-col pl-6 gap-4 my-4">
            {userContact.map((info, index) => (
              <div className="flex gap-4" key={index}>
                <div className="p-2 bg-slate-100 h-max rounded-md">
                  <info.Icon size={18} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">{info.title}</h4>
                  <p className="text-sm font-normal text-slate-400 text-wrap break-all">{info.category}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default JobDeskUserProfile
