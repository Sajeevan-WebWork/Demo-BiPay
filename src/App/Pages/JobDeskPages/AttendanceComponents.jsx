import { Calendar } from 'lucide-react';
import React from 'react';
import ComponentTitle from '../../../Components/ComponentTitle';
import AttendanceChart from '../../../Components/AttendanceChart';
import JobDeskComponentHeader from '../../../Components/JobDeskComponentHeader';
import DataTableComponent from '../../../Components/DataTableComponent';
import AttendanceTabledata from '../../../UserData/AttendanceTabledata';

const AttendanceData = [
  {
    title: "152:00:00",
    subtext: "Total schedule hour",
  },
  {
    title: "00:00:00",
    subtext: "Leave hour",
  },
  {
    title: "97.89%",
    subtext: "Total work availability",
  },
  {
    title: "456 hours",
    subtext: "Total active hours",
  },
  {
    title: "-52 hours",
    subtext: "Balance",
  },
  {
    title: "Early",
    subtext: "Average Behaviour",
  },
];

const tableHeader = ["Date", "PunchedIn", "InGeolocation", "PunchedOut", "OutGeolocation", "Behavior", "Type",];

const AttendanceComponents = () => {
  return (
    <>
      <JobDeskComponentHeader title={'Attendance'} btnText={'Select Date'} Icon={Calendar} />
      <div className="my-4">
        <AttendanceChart />
      </div>

      <div className="grid grid-cols-6 py-3 justify-items-start items-start content-start p-2 border-2 border-slate-200 rounded-md">
        {AttendanceData.map((data, index) => {
          let textColor = 'text-black'; // Default text color

          if (data.title === "456 hours") {
            textColor = 'text-green-500';
          } else if (data.title === "-52 hours") {
            textColor = 'text-red-500';
          }

          return (
            <div className="flex flex-col gap-1 p-3 border-r-2 w-full h-full last:border-0" key={index}>
              <p className={`text-sm font-medium ${textColor}`}>{data.title}</p>
              <p className="text-[12px] font-thin">{data.subtext}</p>
            </div>
          );
        })}
      </div>

      <div>
        <DataTableComponent tableHeader={tableHeader} tableList={AttendanceTabledata} />

      </div>
    </>
  );
};

export default AttendanceComponents;
