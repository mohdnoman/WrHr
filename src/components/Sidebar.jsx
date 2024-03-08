import React from "react";
import {
  UilWindowGrid,
  UilUserPlus,
  UilSchedule,
  UilUsersAlt,
  UilServer,
  UilHeadphones,
  UilSetting,
} from "@iconscout/react-unicons";

const Sidebar = () => {
  return (
    <div className="bg-gray-50 h-[130%] flex-none md:flex md:flex-col md:w-32 lg:w-48 xl:w-64 hidden border-r">
      <div className="p-4  border-gray-700 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-black">WeHR</h2>
      </div>

      <div className="flex-grow overflow-y-auto">
        <p className="text-[#686868] text-sm text-start pl-6 mt-10">
          MAIN MENU
        </p>
        <ul className="py-4 ">
          <li className="px-4 py-2 text-[#FF5151] cursor-pointer text-center ">
            <div className="flex gap-1">
              <UilWindowGrid />
              <p>Dashboard</p>
            </div>
          </li>
          <li className="px-4 py-2 text-[#686868] cursor-pointer text-center">
            <div className="flex gap-1">
              <UilUserPlus />
              <p>Recruitment</p>
            </div>
          </li>
          <li className="px-4 py-2 text-[#686868] cursor-pointer text-center">
            <div className="flex gap-1">
              <UilSchedule />
              <p>Schedule</p>
            </div>
          </li>
          <li className="px-4 py-2 text-[#686868] cursor-pointer text-center">
            <div className="flex gap-1">
              <UilUsersAlt />
              <p>Employee</p>
            </div>
          </li>
          <li className="px-4 py-2 text-[#686868] cursor-pointer text-center">
            <div className="flex gap-1">
              <UilServer />
              <p>Department</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex-grow overflow-y-auto">
        <p className="text-[#686868] text-sm text-start ml-6">OTHER</p>
        <ul className="py-2">
          <li className="px-4 py-2 text-[#686868] cursor-pointer text-center">
            <li className="px-4 py-2 text-[#686868] cursor-pointer text-center">
              <div className="flex gap-1">
                <UilHeadphones />
                <p>Support</p>
              </div>
            </li>
          </li>
          <li className="px-4 py-2 text-[#686868] cursor-pointer text-center">
            <li className="px-4 py-2 text-[#686868] cursor-pointer text-center">
              <div className="flex gap-1">
                <UilSetting />
                <p>Settings</p>
              </div>
            </li>
          </li>
        </ul>
      </div>

      <div className="h-[20%]"></div>
      
    </div>
  );
};

export default Sidebar;
