import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { togglePopup } from "../store/popupSlice";
import { setActiveLink } from "../store/activeLinkSlice";
import Time from "./Time"
import Date from "./Date";
import Team from "./Team";



const Popup = () => {
  const showPopup = useSelector((state) => state.popup.showPopup);
  const activeLink = useSelector((state) => state.activeLink.activeLink);
  const dispatch = useDispatch();



  const handleClose = () => {
    dispatch(togglePopup()); // Close the popup when clicked on the close button
  };

  const handleLinkClick = (link) => {
    dispatch(setActiveLink(link));
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        showPopup ? "block" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg">
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 p-2 text-gray-600"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex bg-[#FAFAFA]  justify-between">
          <div className="pr-4 w-auto flex flex-col justify-around border-r">
            <ul className="flex flex-col gap-4">
              <li
                className={`cursor-pointer ${
                  activeLink === "Time" ? "text-red-500 font-bold" : ""
                }`}
                onClick={() => handleLinkClick("Time")}
              >
                Time
              </li>
              <li
                className={`cursor-pointer ${
                  activeLink === "Date" ? "text-red-500 font-bold" : ""
                }`}
                onClick={() => handleLinkClick("Date")}
              >
                Date
              </li>
              <li
                className={`cursor-pointer ${
                  activeLink === "Add team member"
                    ? "text-red-500 font-bold"
                    : ""
                }`}
                onClick={() => handleLinkClick("Add team member")}
              >
                Add team member
              </li>
            </ul>
          </div>

          <div className="flex-col justify-center items-center ">
            <div className="items-center m-4 ">
              {activeLink === "Time" && <Time />}
              {activeLink === "Date" && <Date />}
              {activeLink === "Add team member" && <Team />}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Popup;
