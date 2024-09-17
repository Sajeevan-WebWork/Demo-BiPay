import { ChevronRight, Mail, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import BgPrimaryButton from '../../Components/BgPrimaryButton';
import OutlinedButton from '../../Components/OutlinedButton';
import PageBreadcrumbs from '../../Components/Breadcrumbs';

const SettingPage = () => {
  const [currentNavItem, setCurrentNavItem] = useState('');
  const [thirdSubnav, setThirdSubnav] = useState(''); // State for third subnav
  const [modalType, setModalType] = useState(''); // State to track modal type
  const [isModalVisible, setIsModalVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const secondPart = pathParts[2];  // 'general' or equivalent
    const thirdPart = pathParts[3];   // 'default' or equivalent
  
    if (secondPart) {
      setCurrentNavItem(secondPart);  // Set currentNavItem from URL
    }
  
    if (thirdPart) {
      setThirdSubnav(thirdPart);  // Set thirdSubnav from URL
    } else if (location.state) {
      setCurrentNavItem(location.state.currentNavItem || secondPart); // Set from state if available
      setThirdSubnav(location.state.subRoute || thirdPart); // Use state or fallback to URL
    }
  }, [location]);
  

  const openModal = (type) => {
    setModalType(type);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalType('');
  };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <PageBreadcrumbs />
          <h1 className="text-xl font-semibold capitalize">{thirdSubnav || "Default"}</h1>
        </div>
        <div className="flex gap-4">
          <BgPrimaryButton clickOpen={() => openModal('Add Leave Type   ')} text="Add Leave Type " Icon={Plus} />
          {/* <OutlinedButton onButtonClick={() => openModal('Invite')} text="Invite" Icon={Mail} /> */}
        </div>
      </div>

      <div className="bg-white rounded-lg px-2 py-4 my-6">
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SettingPage;
