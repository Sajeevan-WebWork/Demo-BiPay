import { ChevronRight, Plus, UserRoundPlus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BgPrimaryButton from '../../Components/BgPrimaryButton';
import AddUserModal from '../../Components/AddUserModal';

const AdministrationPage = () => {
  const [currentNavItem, setCurrentNavItem] = useState('');
  const [isUserModalVisible, setUserModalVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.sublinkName) {
      setCurrentNavItem(location.state.sublinkName);
    } else {
      setCurrentNavItem('');
    }
  }, [location]);

  const openUserModal = () => setUserModalVisible(true);
  const closeUserModal = () => setUserModalVisible(false);

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p className="text-sm text-slate-400 cursor-pointer">Attendance</p>
            <ChevronRight size={20} className="text-slate-400" />
            <p className="text-sm text-slate-800 cursor-pointer capitalize">
              {currentNavItem || 'Role'}
            </p>
          </div>
          <h1 className="text-xl font-normal">{currentNavItem || 'Role'}</h1>
        </div>

        <div className="flex gap-4">
          {currentNavItem === "Role" || !currentNavItem ? (
            <>
              <BgPrimaryButton clickOpen={openUserModal} text="Add user" Icon={Plus} />
              <BgPrimaryButton clickOpen={openUserModal} text="Invite User" Icon={UserRoundPlus} />
            </>
          ) : currentNavItem === "Shift" ? (
            <BgPrimaryButton clickOpen={openUserModal} text="Add Work shift" Icon={Plus} />
          ) : currentNavItem === "Department" || currentNavItem === "Holiday" ? (
            <BgPrimaryButton clickOpen={openUserModal} text="Add Department" Icon={Plus} />
          ) : currentNavItem === "Announcement" ? (
            <BgPrimaryButton clickOpen={openUserModal} text="Add Announcement" Icon={Plus} />
          ) : null}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg my-6">
        <Outlet />
      </div>

      {isUserModalVisible && (
        <AddUserModal modalTitle={'Add User'} closeModal={closeUserModal} />
      )}
    </div>
  );
};

export default AdministrationPage;
