import { ChevronRight, LogOut } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BgPrimaryButton from '../../Components/BgPrimaryButton';
import AssignLeaveModal from '../../Components/AssignLeaveModal';
import PageBreadcrumbs from '../../Components/Breadcrumbs';
import SideNavLinks from '../../UserData/NavData';

const LeavePage = () => {
  const [subRoute, setCurrentNavItem] = useState('');
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Find the current path
    const currentPath = location.pathname;

    // Find the parent link for 'Leave'
    const leaveLink = SideNavLinks.find(link => link.navLink === '/leave');

    if (leaveLink && leaveLink.subLinks) {
      // Find the sublink that matches the current path
      const matchingSubLink = leaveLink.subLinks.find(subLink => subLink.path === currentPath);
      setCurrentNavItem(matchingSubLink ? matchingSubLink.subNavItem : 'Status');
    } else {
      setCurrentNavItem('Status');
    }
  }, [location]);

  const openEditModal = () => {
    setIsModalVisible(true);
  };

  const closeEditModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <PageBreadcrumbs />
          </div>
          <h1 className="text-xl font-normal">{subRoute}</h1>
        </div>
        <div className="flex gap-4">
          <BgPrimaryButton clickOpen={openEditModal} text="Assign Leave" Icon={LogOut} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg my-6">
        <Outlet />
      </div>

      {isModalVisible && (
        <AssignLeaveModal closeModal={closeEditModal} />
      )}
    </>
  );
};

export default LeavePage;
