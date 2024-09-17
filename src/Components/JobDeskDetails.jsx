import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const JobNavList = [
    { 
        navItem: "Allowance",
        path: "allowance" // Make sure this matches the path in your router configuration
    },
    { 
        navItem: "Attendance",
        path: "attendance"
    },
    { 
        navItem: "Leave",
        path: "leave"
    },
    { 
        navItem: "Folder",
        path: "folder"
    },
    { 
        navItem: "Assets",
        path: "assets"
    },
    { 
        navItem: "History",
        path: "history"
    },
    { 
        navItem: "Salary",
        path: "salary"
    },
    { 
        navItem: "Pay run",
        path: "payrun"
    },
    { 
        navItem: "Slip",
        path: "slip"
    },
    { 
        navItem: "Address",
        path: "address"
    },
    { 
        navItem: "Contacts",
        path: "contacts"
    },
    { 
        navItem: "Social",
        path: "social"
    },
];

const JobDeskDetails = ({ onNavItemClick }) => {
  const location = useLocation();

  return (
    <div className="w-9/12 py-4 px-6 bg-white rounded-lg overflow-hidden">
      <div className="flex py-4 gap-6 overflow-y-scroll no-scrollbar pr-5 ">
        {JobNavList.map((list, index) => {
          const isActive = location.pathname.includes(list.path) || (location.pathname === "/job-desk" && list.path === "allowance");
          
          return (
            <Link 
              key={index} 
              to={list.path}
              className={`relative text-sm text-nowrap transition-all font-medium ${isActive ? "text-slate-900 after:w-full after:h-[2px] after:bg-blue-500" : "text-slate-400 hover:text-slate-900 after:w-0 after:h-[2px] after:bg-black"} after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:top-7 after:transition-all after:duration-300`}
              onClick={() => onNavItemClick(list.navItem)}
            >
              {list.navItem}
            </Link>
          );
        })}
      </div>

      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default JobDeskDetails;