import { Briefcase, Calculator, Clock3, Folder, House, Settings, User } from "lucide-react";

const SideNavLinks = [
    {
        navItem: 'Dashboard',
        icon: House,
        navLink: '/'
    },
    {
        navItem: 'Job Desk',
        icon: Briefcase,
        navLink: '/job-desk'
    },
    {
        navItem: 'Employee',
        icon: User,
        navLink: '/employee',
        subLinks: [
            {
                subNavItem: "All Employee",
                navLink: '/employee/allemployee',
            },
            {
                subNavItem: "Appointment",
                navLink: '/employee/appointment',
            }
        ]
    },
    {
        navItem: 'Leave',
        icon: Calculator,
        navLink: '/leave',
        subLinks: [
            {
                navLink: '/leave/status',
                subNavItem: "Status"
            },
            {
                navLink: '/leave/request',
                subNavItem: "Request"
            },
            {
                navLink: '/leave/calendar',
                subNavItem: "Calendar"
            },
            {
                navLink: '/leave/summary',
                subNavItem: "Summary"
            }
        ]
    },
    {
        navItem: 'Attendance',
        icon: Clock3,
        navLink: '/attendance',
        subLinks: [
            {
                navLink: '/attendance/dailylog',
                subNavItem: "Daily Log"
            },
            {
                navLink: '/attendance/request',
                subNavItem: "Request"
            },
            {
                navLink: '/attendance/details',
                subNavItem: "Details"
            },
            {
                navLink: '/attendance/summary',
                subNavItem: "Summary"
            }
        ]
    },
    {
        navItem: 'Administration',
        icon: Folder,
        navLink: '/administration',
        subLinks: [
            {
                navLink: '/administration/role',
                subNavItem: "Role"
            },
            {
                navLink: '/administration/shift',
                subNavItem: "Shift"
            },
            {
                navLink: '/administration/department',
                subNavItem: "Department"
            },
            {
                navLink: '/administration/announcement',
                subNavItem: "Announcement"
            }
        ]
    },
    {
        navItem: 'Setting',
        icon: Settings,
        navLink: '/setting',
        subLinks: [
            {
                navLink: '/setting/general',
                subNavItem: "General"
            },

            {
                navLink: '/setting/leave',
                subNavItem: "Leave"
            },

            {
                navLink: '/setting/attendance',
                subNavItem: "Attendance"
            },

            {
                navLink: '/setting/payroll',
                subNavItem: "Payroll"
            },

            {
                navLink: '/setting/import',
                subNavItem: "Import"
            },

            

        ]
    }
];

export default SideNavLinks;
