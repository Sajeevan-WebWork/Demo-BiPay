import { ChevronRight, Download, Import, LogOut, Quote, Settings, Upload } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BgPrimaryButton from '../../Components/BgPrimaryButton'
import AssignLeaveModal from '../../Components/AssignLeaveModal'
import OutlinedButton from '../../Components/OutlinedButton'
import AttendanceModal from '../../Components/AttendanceModal'
import PageBreadcrumbs from '../../Components/Breadcrumbs'
import SideNavLinks from '../../UserData/NavData'
const AttendancePage = () => {

  const [subRoutes, setSubRoutesItem] = useState('');
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;

    const attendanceLink = SideNavLinks.find(link => link.navLink === "/attendance")

    if(attendanceLink && attendanceLink.subLinks) {
      const matchaingSubLink = attendanceLink.subLinks.find(subLink => subLink.path === currentPath);
      setSubRoutesItem(matchaingSubLink ? matchaingSubLink.subNavItem : "");
      } else {
        setSubRoutesItem("")
      }
    }
  )

  const openEditModal = () => {
    setIsModalVisible(true)
  }

  const closeEditModal = () => {
    setIsModalVisible(false)
  }
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <PageBreadcrumbs />
          </div>
          <h1 className="text-xl font-normal"> {subRoutes}</h1>
        </div>
        <div className="flex gap-4">
          {subRoutes === 'Daily Log' || !subRoutes ? (
            // Buttons for 'Attendance/Daily Log' page
            <>
              <BgPrimaryButton clickOpen={openEditModal} text="Add Attendance" Icon={LogOut} />
              <BgPrimaryButton text="Import" Icon={Download} />
              <BgPrimaryButton text="Export" Icon={Upload} />
              <OutlinedButton text={'Setting'} Icon={Settings} />
            </>
          ) : (
            // Buttons for other pages
            <>
              <BgPrimaryButton clickOpen={openEditModal} text="Req Attendance" Icon={Quote} />
              <OutlinedButton text={'Setting'} Icon={Settings} />
            </>
          )}
        </div>

      </div>

      <div className="bg-white p-4 rounded-lg my-6">
        <Outlet />
      </div>

      {isModalVisible && (
        <AttendanceModal closeModal={closeEditModal} />
      )}
    </div>
  )
}

export default AttendancePage
