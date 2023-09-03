import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { BiVideoOff } from "react-icons/bi";
import { PiRecordFill } from "react-icons/pi";
import SpeechToText from "../Components/SpeechToText";
import VideoRecorder from "../Components/VideoRecorder";

const Interview = () => {
  return (
    <div>
      <h1 className="text-center mt-24 mb-4 text-xl font-medium text-blue-600">
        Question 1 of 3
      </h1>

      <div className="w-8/12 h-auto p-2 m-auto  rounded-xl items-center  bg-blue-400 flex flex-col place-content-center">
        <div className="flex p-2 rounded-lg items-center  h-16   bg-slate-950 text-white w-80 justify-evenly">
          <span className="cursor-pointer bg-slate-700 p-2 flex items-center space-x-1 rounded-lg text-lg">
            {" "}
            <PiRecordFill /> <span>Start</span>{" "}
          </span>{" "}
          <span className="cursor-pointer bg-slate-700 p-2 flex items-center space-x-1 font-medium rounded-lg text-lg">
            <BiStopwatch /> <span>1:00</span>{" "}
          </span>{" "}
          <span className="cursor-pointer">
            <BiVideoOff fontSize={"30px"} />
          </span>
        </div>

        <div className="w-10/12 m-10 border flex justify-between bg-white h-96 text-center rounded-lg ">
         
          <VideoRecorder/>
          <SpeechToText/>
          
        </div>
      </div>
    </div>
  );
};

export default Interview;
