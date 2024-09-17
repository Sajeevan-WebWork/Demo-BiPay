import React from 'react';
import { ArrowLeftToLine, ArrowRightFromLine, Plus } from 'lucide-react';
import BgPrimaryButton from '../../Components/BgPrimaryButton.jsx';
import OutlinedButton from '../../Components/OutlinedButton.jsx';
import LeaveOverview from '../../Components/LeaveOverview.jsx';
import TimeLogOverview from '../../Components/TimeLogOverview.jsx';
import AnnouncementsTablet from '../../Components/AnnouncementsTablet.jsx';

const DashboardPage = () => {
  const UserNmae = "Sajeevan"
  return (
    <>
      <div className="flex items-center justify-between w-full dashboad__header">
        <h1 className="text-xl font-semibold text-titan-950">Dashboard</h1>
        <div className="flex gap-4">
          <BgPrimaryButton text="Buddy Punching" Icon={Plus} />
          <OutlinedButton text="Manager POV" />
        </div>
      </div>

      <div className="w-full flex items-center justify-between bg-white p-4 my-6 rounded-md dashboard__greeting">
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-semibold">Good to see you, {UserNmae} <div className='handShake inline-block'>👋</div></h2>
          <p className="text-sm font-normal">You came 15 minutes early today.</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-200 text-green-900 rounded-md">
              <ArrowLeftToLine color='green' size={20} />
            </div>
            <div className="flex flex-col">
              <span className='text-base font-normal'>7:14 AM</span>
              <span className="text-base font-normal">Punch in</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className='text-base font-normal'>05:00 PM</span>
              <span className="text-base font-normal">Punch Out</span>
            </div>
            <div className="p-3 bg-red-200 text-green-900 rounded-md">
              <ArrowRightFromLine color='red' size={20} />
            </div>
          </div>
        </div>
      </div>

      <LeaveOverview />
      <TimeLogOverview />
      <AnnouncementsTablet />
    </>
  );
};

export default DashboardPage;
