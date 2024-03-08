import React from "react";
import {
  UilSearch,
  UilBell,
  UilCommentAltMessage,
  UilAngleDown,
  UilBars,
} from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex border-b justify-between items-center">
      <div className="sm:block md:hidden ml-2 flex">
        <UilBars color="#B2B2B2" size={30} />
        {/* <UilSearch className="text-gray-400" size={30} /> */}
      </div>

      <div className="hidden md:block">
        <div className="relative ">
          <input
            type="text"
            className="md:w-64 lg:w-82 border h-10 border-gray-300 rounded-md  my-2 px-2 ml-4  focus:outline-none focus:border-blue-500 "
            placeholder="Search"
          />
          <div className="absolute right-2 inset-y-0  flex items-center  pointer-events-none">
            <UilSearch className="text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <div className="items-center">
          <div className="flex relative">
            <div className="relative">
              <UilBell className="text-gray-400" size={30} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full flex items-center justify-center text-white text-xs border border-white"></span>
            </div>
          </div>
        </div>

        <div>
          <UilCommentAltMessage className="text-gray-400" size={30} />
        </div>

        <div className="flex items-center gap-2 mr-4">
          <div className="w-8 h-8 rounded-xl ">
            <img src="public/user.png" alt="user" />
          </div>
          <div className="text-[#161E54] text-lg hidden lg:block">Admirra John</div>
          <div>
            <UilAngleDown color="#737898" size="30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
