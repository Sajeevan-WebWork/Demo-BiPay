import { ChevronRight, Mail, Plus } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BgPrimaryButton from '../../Components/BgPrimaryButton';
import OutlinedButton from '../../Components/OutlinedButton';
import EmployeeModal from '../../Components/EmployeeModal';
import PageBreadcrumbs from '../../Components/Breadcrumbs';
import SideNavLinks from '../../UserData/NavData';

const EmployeePage = () => {
  const [subRoute, setSubRouteItem] = useState('');
  const [modalType, setModalType] = useState(''); // State to track modal type
  const [isModalVisible, setIsModalVisible] = useState(false);
  const location = useLocation();
  console.log(location);

  // useEffect(() => {
  //   const currentPath = location.pathname;

  //   // Find the parent link for 'Employee'
  //   const employeeLink = SideNavLinks.find(link => link.navLink === '/employee');

  //   if (employeeLink && employeeLink.subLinks) {
  //     // Find the sublink that matches the current path
  //     const matchingSubLink = employeeLink.subLinks.find(subLink => currentPath === subLink.path || currentPath.startsWith(`${subLink.path}/`));
  //     setSubRouteItem(matchingSubLink ? matchingSubLink.subNavItem : '');
  //   } else {
  //     setSubRouteItem('');
  //   }
  // }, [location.pathname]);

  // const openModal = (type) => {
  //   setModalType(type);
  //   setIsModalVisible(true);
  // };

  // const closeModal = () => {
  //   setIsModalVisible(false);
  //   setModalType('');
  // };

  // const getModalTitle = () => {
  //   if (location.pathname === "/employee/appointment" || location.pathname === '/employee') {
  //     return modalType === 'Invite' ? "Invite" : "Add Designation";
  //   } else if (location.pathname === "/employee/allemployee") {
  //     return modalType === 'Add Employee' ? "Add Employee" : "Invite";
  //   }
  //   return '';
  // };

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <PageBreadcrumbs />
          </div>
          <h1 className="text-xl font-normal">{subRoute || 'Employee'}</h1>
        </div>
        <div className="flex gap-4">
          <BgPrimaryButton clickOpen={() => openModal('Add Employee')} text="Add Employee" Icon={Plus} />
          <OutlinedButton onButtonClick={() => openModal('Invite')} text="Invite" Icon={Mail} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg my-6">
        <Outlet />
      </div>

      {/* {isModalVisible && (
        <EmployeeModal
          modalTitle={getModalTitle()}
          firstInput={modalType === 'Add Employee' ? "Name" : "Name"}
          secondInput={modalType === 'Add Employee' ? "Designation" : "Email"}
          closeModal={closeModal}
        />
      )} */}
    </>
  );
};

export default EmployeePage;
