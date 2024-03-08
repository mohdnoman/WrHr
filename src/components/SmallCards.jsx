import React from 'react';

const SmallCards = ({ heading, number, description, bgColor = "orange", textColor = "blue" }) => {
  return (
    <div className={`rounded-xl ${bgColor} p-4 flex-col items-center m-2 border border-gray-100 hover:shadow-md`}>
      <h3 className="text-lg text-[#161E54]">{heading}</h3>
      <p className="text-2xl text-[#161E54]">{number}</p>
      <p className={`text-[${textColor}] `}>{description}</p>
    </div>
  );
};

export default SmallCards;
