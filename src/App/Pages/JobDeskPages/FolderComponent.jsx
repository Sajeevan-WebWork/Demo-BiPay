import React, { useState } from 'react';
import { FilePlus2 } from 'lucide-react';
import JobDeskComponentHeader from '../../../Components/JobDeskComponentHeader';
import DataTableComponent from '../../../Components/DataTableComponent';
import LeaveTabledata from '../../../UserData/LeaveAttendanceTableData';
import ModalPopup from '../../../Components/ModalPopup';

const folderTableHeader = [
  "Datetime",
  "Attachments",
  "Status"
];

const FolderComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
    <div>
      <JobDeskComponentHeader
        title={"Documents"}
        Icon={FilePlus2}
        btnText={'Add new document'}
        onButtonClick={openModal}
      />
      <DataTableComponent tableHeader={folderTableHeader} tableList={LeaveTabledata} />
      {isModalVisible && <ModalPopup closeModal={closeModal} />}
    </div>
    </>
  );
}

export default FolderComponent;
