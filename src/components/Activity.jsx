import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { togglePopup } from '../store/popupSlice';

const Activity = () => {
  const dispatch = useDispatch()
  return (
    <div className="rounded-md bg-[#161E54]">
      <div className="bg-[#1B204A] w-full rounded-t-md ">
        <h1 className="text-xl text-white p-3 font-semibold pl-4">
          Recently Activity
        </h1>
      </div>

      <div className="flex-col items-start py-4 pl-4 pr-6 gap-2">
        <p className="text-sm text-gray-300">10.40 AM, Fri 10 Sept 2021</p>
        <h1 className="text-xl text-white">You Posted a New Job</h1>
        <p className=" text-gray-200">
          Kindly check the requirements and
          <br />
          terms of work and make sure everything is right.
        </p>
      </div>

      <div className="flex p-2 justify-between ">
        <h1 className="text-white text-xl p-2 ">Schedule a call </h1>
        <button
          className="bg-[#FF5151] text-white px-4 py-2 rounded-md w-36 mr-6 hover:bg-[#ff5e5e]  text-lg"
          onClick={() => dispatch(togglePopup())}
        >
          Schedule
        </button>
      </div>
    </div>
  );
};

export default Activity;
