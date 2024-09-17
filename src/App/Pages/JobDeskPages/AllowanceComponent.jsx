import { TriangleAlert, X } from 'lucide-react';
import React, { useState } from 'react';

const paidType = ["Paid Casual", "Paid Sick", "Unpaid Casual", "Unpaid Sick"];

const AllowanceComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && (
        <div className="p-4 bg-orange-100 border-2 border-orange-200 rounded-md  transition-all">
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-3">
              <TriangleAlert color="#F0B732" />
              <h3 className="text-base font-semibold">Allowance Policy</h3>
            </div>
            <X color="#F0B732" onClick={closeModal} className="cursor-pointer" />
          </div>
          <div className="ml-12">
            <ul className="list-decimal">
              <li className="text-sm font-light">Leave will start from the month of January.</li>
              <li className="text-sm font-light">Any type of change will be effective on the next day.</li>
            </ul>
          </div>
        </div>
      )}

      <div className="flex gap-2 my-6">
        {paidType.map((type, index) => (
          <div className="border-2 flex-1 rounded-lg px-4 py-4" key={index}>
            <h4 className="text-base font-medium">{type}</h4>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-normal">{type.includes('Paid') ? 'Paid' : 'Unpaid'}</h6>
                <p className="text-sm font-light text-slate-500">Type</p>
              </div>

              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-normal">07.00</h6>
                <p className="text-sm font-light text-slate-500">Allowance</p>
              </div>

              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-normal">$21,000</h6>
                <p className="text-sm font-light text-slate-500">Earned</p>
              </div>

              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-normal">$3</h6>
                <p className="text-sm font-light text-slate-500">Taken</p>
              </div>

              <div className="flex flex-col gap-1">
                <h6 className="text-sm font-normal">$5</h6>
                <p className="text-sm font-light text-slate-500">Availability</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllowanceComponent;
