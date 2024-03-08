// import React from "react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { setActiveLink } from "../store/activeLinkSlice";
// import { useDispatch } from "react-redux";
// import Button from "./Button";

// const Date = () => {
//   const dispatch = useDispatch();
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div>
//         <h1 className="text-xl text-[#101828]">Select a time for meeting</h1>
//         <p className="text-[#475467]">
//           The following time will be set for the meeting:
//         </p>
//           <DateCalendar />
//         <Button
//           text={"Next"}
//           onclick={() => dispatch(setActiveLink("Add team member"))}
//         />
//       </div>
//     </LocalizationProvider>
//   );
// };

// export default Date;

import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { setActiveLink } from "../store/activeLinkSlice";
import { useDispatch } from "react-redux";
import Button from "./Button";

const Date = () => {
  const dispatch = useDispatch();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <h1 className="text-xl text-[#101828]">Select a date for meeting</h1>
        <p className="text-[#475467]">
          The following date will be set for the meeting:
        </p>
        {/* Adjust the width and height of the DateCalendar */}
        <DateCalendar style={{ width: "300px", height: "300px" }} />
        <Button
          text={"Next"}
          onclick={() => dispatch(setActiveLink("Add team member"))}
        />
      </div>
    </LocalizationProvider>
  );
};

export default Date;
