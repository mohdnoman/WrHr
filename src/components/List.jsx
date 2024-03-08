import React from "react";
import { UilAngleDown, UilTagAlt } from "@iconscout/react-unicons";

const List = ({ heading, dropdown, list, priority, footer }) => {
  return (
    <div className="rounded-md border  border-gray-300 m-2">
      <div className="flex justify-between items-center mx-4 py-2">
        <div>
          <h2 className="text-2xl text-[#161E54]">{heading}</h2>
        </div>
        <div className="flex border border-gray-200 rounded-md px-1 py-1">
          <p className="text-sm text-[#686868]">{dropdown}</p>
          <UilAngleDown className="text-sm text-[#686868]" />
        </div>
      </div>
      {/* LIST */}
      <div>
        {priority && <p className="text-[#686868] text-sm ml-2">Priority</p>}
        <ul>
          {list.map((item) => (
            <li
              key={item.heading}
              className="flex justify-between items-center py-2  px-2 mx-4 rounded-md bg-gray-100 border border-gray-300 my-2"
            >
              <div>
                <p className="text-lg text-[#303030]">{item.heading}</p>
                <p className="text-[10px] text-[#686868]">{item.subheading}</p>
              </div>
              <div className="flex items-center gap-2">
                <UilTagAlt className="text-gray-600" size={20} />
                <div className="flex gap-1">
                  <span className="bg-gray-600 h-1.5 w-1.5 rounded-full"></span>
                  <span className="bg-gray-600 h-1.5 w-1.5 rounded-full"></span>
                  <span className="bg-gray-600 h-1.5 w-1.5 rounded-full"></span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* BOTTTOM TEXT */}
      <div className=" flex items-center justify-center w-full rounded-b-md text-[#FF5151] border border-gray-300 py-1">
        {footer}
      </div>
    </div>
  );
};

export default List;
