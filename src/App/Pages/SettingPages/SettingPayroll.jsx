import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const settingSubRoute = [
  {
    path: "/setting/payroll/defaultpayrun",
    subRoute: "Default Payrun"
  },
  {
    path: "/setting/payroll/value",
    subRoute: "Value"
  },
  {
    path: "/setting/payroll/manage-audience",
    subRoute: "Manage audience"
  },
  {
    path: "/setting/payroll/payslip",
    subRoute: "Payslip"
  },
]

const SettingPayroll = () => {
  const location = useLocation();
  return (
    <div>
      <div className="flex gap-4 p-1">
        {settingSubRoute.map((link, index) => {
          // Check if the link is active
          const isActive =
            location.pathname === link.path || (location.pathname === "/setting/payroll" && link.path === "/setting/payroll/defaultpayrun");

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
  )
}

export default SettingPayroll;
