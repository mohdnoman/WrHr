import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Button from "./Button";
import { setActiveLink } from "../store/activeLinkSlice";
import {useDispatch } from "react-redux";

export default function Time() {
    const dispatch = useDispatch()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex-col justify-between gap-2">
        <h1 className="text-xl text-[#101828]">Select a time for meeting</h1>
        <p className="text-[#475467]">
          The following time will be set for the meeting:
        </p>
        <DemoContainer components={["TimePicker"]}>
          <TimePicker label="Time Picker" style={{ width: "300px", height: "300px" }}/>
        </DemoContainer>
        <Button text={"Next"} onclick={() => dispatch(setActiveLink("Date"))}/>
      </div>
    </LocalizationProvider>
  );
}
