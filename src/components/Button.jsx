import React from "react";

const Button = ({ text, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="bg-[#FF5151] text-white px-6 mt-2 py-1 rounded-sm "
    >
      {text}
    </button>
  );
};

export default Button;
