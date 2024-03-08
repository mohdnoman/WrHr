import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglePopup } from "../store/popupSlice";
import Button from "./Button";
import { UilUser, UilAngleDown } from "@iconscout/react-unicons";

const Team = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex-col justify-between gap-2">
        <h1 className="text-xl text-[#101828]">Add team member</h1>
        <p className="text-[#475467]">
          The following users have access to this meeting:
        </p>
        <div>
          <div className="flex-col">
            <div className="flex justify-between items-center p-2 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="public/user.png"
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3">
                  <h1 className="text-lg font-semibold">Candice Wu</h1>
                  <p className="text-sm text-gray-500">
                    candice@untitledui.com
                  </p>
                </div>
              </div>
              <div className="text-red-500 cursor-pointer">Remove</div>
            </div>
            <div className="flex justify-between items-center p-2 border rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="public/user.png"
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3">
                  <h1 className="text-lg font-semibold">Candice Wu</h1>
                  <p className="text-sm text-gray-500">
                    candice@untitledui.com
                  </p>
                </div>
              </div>
              <div className="text-red-500 cursor-pointer">Remove</div>
            </div>
          </div>

          <div>
            <p className="text-[#344054]">Team member</p>
          </div>

          <div className="flex items-center bg-white border rounded-lg px-3 py-2">
            <div className="mr-2">
              <UilUser size={20} />
            </div>
            <input
              type="text"
              className="flex-grow outline-none"
              placeholder="Select team member"
            />
            <div className="ml-2">
              <UilAngleDown size={20} />
            </div>
          </div>
        </div>
        <Button text={"Confirm"} onclick={() => dispatch(togglePopup())} />
      </div>
    </div>
  );
};

export default Team;
