import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DashboardPage from './App/Pages/DashboardPage';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AttendancePage from './App/Pages/AttendancePage';
import Layout from './App/Layout';
import JobDeskPage from './App/Pages/JobDeskPage';
import EmployeePage from './App/Pages/EmployeePage';
import LeavePage from './App/Pages/LeavePage';
import AdministrationPage from './App/Pages/AdministrationPage';
import SettingPage from './App/Pages/SettingPage';
import AllowanceComponent from './App/Pages/JobDeskPages/AllowanceComponent';
import AttendanceComponents from './App/Pages/JobDeskPages/AttendanceComponents';
import LeaveComponent from './App/Pages/JobDeskPages/LeaveComponent';
import AssetsComponent from './App/Pages/JobDeskPages/AssetsComponent';
import HistoryComponent from './App/Pages/JobDeskPages/HistoryComponent';
import FolderComponent from './App/Pages/JobDeskPages/FolderComponent';
import SalaryComponent from './App/Pages/JobDeskPages/SalaryComponent';
import PayRunComponent from './App/Pages/JobDeskPages/PayRunComponent';
import AddressComponent from './App/Pages/JobDeskPages/AddressComponent';
import ContactsComponent from './App/Pages/JobDeskPages/ContactsComponent';
import SlipComponent from './App/Pages/JobDeskPages/SlipComponent';
import SocialcComponent from './App/Pages/JobDeskPages/SocialcComponent';
import AllEmployeeComponent from './App/Pages/EmployeePages/AllEmployeeComponent';
import AppointmentComponent from './App/Pages/EmployeePages/AppointmentComponent';
import NotFountPage from './App/Pages/NotFountPage';
import LeaveStatus from './App/Pages/LeavePages/LeaveStatus';
import LeaveRequest from './App/Pages/LeavePages/LeaveRequest';
import LeaveCalendar from './App/Pages/LeavePages/LeaveCalendar';
import LeaveSummary from './App/Pages/LeavePages/LeaveSummary';
import AttendanceDailyLog from './App/Pages/AttendancePages/AttendanceDailyLog';
import AttendanceRequest from './App/Pages/AttendancePages/AttendanceRequest';
import AttendanceDetails from './App/Pages/AttendancePages/AttendanceDetails';
import AttendanceSummary from './App/Pages/AttendancePages/AttendanceSummary';
import AdministrationRole from './App/Pages/AdministrationPages/AdministrationRole';
import AdministrationShift from './App/Pages/AdministrationPages/AdministrationShift';
import AdministrationDepartment from './App/Pages/AdministrationPages/AdministrationDepartment';
import AdministrationHoliday from './App/Pages/AdministrationPages/AdministrationHoliday';
import AdministrationAnnouncement from './App/Pages/AdministrationPages/AdministrationAnnouncement';
import SettingGeneral from './App/Pages/SettingPages/SettingGeneral';
import SettingLeave from './App/Pages/SettingPages/SettingLeave';
import SettingAttendance from './App/Pages/SettingPages/SettingAttendance';
import SettingPayroll from './App/Pages/SettingPages/SettingPayroll';
import SettingImport from './App/Pages/SettingPages/SettingImport';
import Default from './App/Pages/SettingPages/GeneralSubPages/Default';
import Module from './App/Pages/SettingPages/GeneralSubPages/Module';
import Job from './App/Pages/SettingPages/GeneralSubPages/Job';
import Email from './App/Pages/SettingPages/GeneralSubPages/Email';
import Notification from './App/Pages/SettingPages/GeneralSubPages/Notification';
import Setting from './App/Pages/SettingPages/LeaveSubPages/Setting';
import Policy from './App/Pages/SettingPages/LeaveSubPages/Policy';
import Approval from './App/Pages/SettingPages/LeaveSubPages/Approval';
import Preference from './App/Pages/SettingPages/AttendaceSubPages/Preference';
import Definition from './App/Pages/SettingPages/AttendaceSubPages/Definition';
import IP from './App/Pages/SettingPages/AttendaceSubPages/IP';
import DefaultPayRun from './App/Pages/SettingPages/PayRollSubPages/DefaultPayRun';
import Value from './App/Pages/SettingPages/PayRollSubPages/Value';
import Payslip from './App/Pages/SettingPages/PayRollSubPages/Payslip';
import ManageAudience from './App/Pages/SettingPages/PayRollSubPages/ManageAudience';
import Employees from './App/Pages/SettingPages/ImportSubPages/Employees';
import Attendance from './App/Pages/SettingPages/ImportSubPages/Attendance';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFountPage />, // Corrected typo

    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: 'job-desk',
        element: <JobDeskPage />,
        children: [
          {
            path: '',
            element: <AllowanceComponent />
          },
          {
            path: 'allowance',
            element: <AllowanceComponent />
          },
          {
            path: 'attendance',
            element: <AttendanceComponents />
          },
          {
            path: 'leave',
            element: <LeaveComponent />
          },
          {
            path: 'folder',
            element: <FolderComponent />
          },
          {
            path: 'assets',
            element: <AssetsComponent />
          },
          {
            path: 'history',
            element: <HistoryComponent />
          },
          {
            path: 'salary',
            element: <SalaryComponent />
          },
          {
            path: 'payrun',
            element: <PayRunComponent />
          },
          {
            path: 'slip',
            element: <SlipComponent />
          },
          {
            path: 'address',
            element: <AddressComponent />
          },
          {
            path: 'contacts',
            element: <ContactsComponent />
          },
          {
            path: 'social',
            element: <SocialcComponent />
          },
        ]
      },
      {
        path: 'employee',
        element: <EmployeePage />,
        children: [
          {
            path: '',
            element: <AllEmployeeComponent />
          },
          {
            path: 'allemployee',
            element: <AllEmployeeComponent />
          },
          {
            path: 'appointment',
            element: <AppointmentComponent />
          },
        ]
      },
      {
        path: 'leave',
        element: <LeavePage />,
        children: [
          {
            path: '',
            element: <LeaveStatus />
          },
          {
            path: 'status',
            element: <LeaveStatus />
          },
          {
            path: 'request',
            element: <LeaveRequest />
          },
          {
            path: 'calendar',
            element: <LeaveCalendar />
          },
          {
            path: 'summary',
            element: <LeaveSummary />
          },
        ]
      },
      {
        path: 'attendance',
        element: <AttendancePage />,
        children: [
          {
            path: '',
            element: <AttendanceDailyLog />
          },
          {
            path: 'DailyLog',
            element: <AttendanceDailyLog />
          },
          {
            path: 'request',
            element: <AttendanceRequest />
          },
          {
            path: 'Details',
            element: <AttendanceDetails />
          },
          {
            path: 'summary',
            element: <AttendanceSummary />
          },
        ]
      },
      {
        path: 'administration',
        element: <AdministrationPage />,
        children: [
          {
            path: '',
            element: <AdministrationRole />
          },
          {
            path: 'role',
            element: <AdministrationRole />
          },
          {
            path: 'shift',
            element: <AdministrationShift />
          },
          {
            path: 'department',
            element: <AdministrationDepartment />
          },
          {
            path: 'holiday',
            element: <AdministrationHoliday />
          },
          {
            path: 'Announcement',
            element: <AdministrationAnnouncement />
          },
        ]
      },
      {
        path: 'setting',
        element: <SettingPage />,
        children: [
          {
            path: '',
            element: <SettingGeneral />,
            children: [
              {
                path: '',
                element: <Default />
              }
            ]
          },
          {
            path: 'general',
            element: <SettingGeneral />,

            children: [
              {
                path: '',
                element: <Default />
              },

              {
                path: 'default',
                element: <Default />
              },

              {
                path: 'module',
                element: <Module />
              },

              {
                path: 'job',
                element: <Job />
              },

              {
                path: 'email',
                element: <Email />
              },

              {
                path: 'notification',
                element: <Notification />
              },
            ]
          },
          {
            path: 'leave',
            element: <SettingLeave />,
            children: [
              {
                path: '',
                element: <Setting />
              },

              {
                path: 'setting',
                element: <Setting />
              },

              {
                path: 'policy',
                element: <Policy />
              },

              {
                path: 'approval',
                element: <Approval />
              }
            ]
          },
          {
            path: 'attendance',
            element: <SettingAttendance />,
            children: [

              {
                path: '',
                element: <Preference />
              },
              {
                path: 'preference',
                element: <Preference />
              },

              {
                path: 'definition',
                element: <Definition />
              },

              {
                path: 'ip',
                element: <IP />
              },
            ]
          },
          {
            path: 'payroll',
            element: <SettingPayroll />,
            children: [

              {
                path: '',
                element: <DefaultPayRun />
              },
              {
                path: 'defaultpayrun',
                element: <DefaultPayRun />
              },

              {
                path: 'value',
                element: <Value />
              },

              {
                path: 'manage-audience',
                element: <ManageAudience />
              },

              {
                path: 'payslip',
                element: <Payslip />
              },
            ]
          },
          {
            path: 'import',
            element: <SettingImport />,
            children: [
              {
                path: '',
                element: <Employees />
              },

              {
                path: 'employee',
                element: <Employees />
              },
              {
                path: 'attendance',
                element: <Attendance />
              },
            ]
          },
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
