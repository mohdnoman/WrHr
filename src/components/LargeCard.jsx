import React from "react";
import { UilArrowUp } from "@iconscout/react-unicons";

const LrgeCard = ({ heading, number, men, women, rate }) => {
  return (
    <div className="flex rounded-lg bg-white w-fit  p-2 m-2 gap-2 border border-gray-300 hover:shadow-lg">
      <div className="flex-col items-center justify-center">
        <h3 className="text-lg text-[#161E54]">{heading}</h3>
        <p className="text-4xl text-[#161E54]">{number}</p>
        <p className="text-[#686868] text-sm">{men} Men</p>
        <p className="text-[#686868] text-sm">{women} Women</p>
      </div>

      <div className="flex-col items-center justify-center ">
        <div className="relative flex flex-col items-center">
          <p className="text-[#FF5151] text-sm">+{rate}%</p>
          <UilArrowUp size={10} className="text-[#FF5151]" />
          <div className="absolute top-5 left-0 flex items-center">
            <img src="public/Vector2.png" alt="graph" />
          </div>
          <div className="absolute top-5 left-0 flex items-center">
            <img src="public/Vector.png" alt="graph" />
          </div>
        </div>

        <div>
          <p className="text-[#303030] px-2 bg-[#FFEFE7] rounded-lg mt-12 border border-gray-200">
            +{rate}% Past month
          </p>
        </div>
      </div>
    </div>
  );
};

export default LrgeCard;
