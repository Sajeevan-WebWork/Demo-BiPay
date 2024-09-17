import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const settingSubRoute = [
  {
    path: "/setting/general/default",
    subRoute: "Default"
  },
  {
    path: "/setting/general/module",
    subRoute: "Module"
  },
  // {
  //   path: "/setting/general/job",
  //   subRoute: "Job"
  // },
  {
    path: "/setting/general/email",
    subRoute: "Email"
  },
  {
    path: "/setting/general/notification",
    subRoute: "Notification"
  },
];

const SettingGeneral = () => {
  const location = useLocation();

  return (
    <div>
      <div className="flex gap-4 p-1">
        {settingSubRoute.map((link, index) => {
          // Check if the link is active
          const isActive =
            location.pathname === link.path || (location.pathname === "/setting/general" && link.path === "/setting/general/default");

          return (
            <Link
              to={link.path}
              state={{ subRoute: link.subRoute }}  // Pass the subRoute in state
              className={`relative text-sm text-nowrap transition-all font-medium capitalize ${
                isActive
                  ? "text-slate-900 after:w-full after:h-[2px] after:bg-blue-500"
                  : "text-slate-400 hover:text-slate-900 after:w-0 after:h-[2px] after:bg-black"
              } after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:top-7 after:transition-all after:duration-300`}
              key={index}
            >
              {link.subRoute}
            </Link>
          );
        })}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SettingGeneral;
