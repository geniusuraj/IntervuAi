import React from 'react';
import { useRecordWebcam } from 'react-record-webcam';
import { BsDownload,BsCameraVideoFill,BsCameraVideoOffFill } from "react-icons/bs";


export default function Video() {
  const recordWebcam = useRecordWebcam({ frameRate: 60 });

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  };

  const stopCamera = () => {
    if (recordWebcam.status === 'OPEN') {
      recordWebcam.close(); // Close the camera if it's open
    }
  };

  return (
    <div className="container mx-auto py-4 px-2 sm:px-6 lg:px-8">
      <p className="text-lg">Camera status: {recordWebcam.status}</p>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <button
          onClick={recordWebcam.open}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          <BsCameraVideoFill/>
        </button>

        <button
          onClick={stopCamera}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
        >
          <BsCameraVideoOffFill/>
        </button>

        <button
          onClick={recordWebcam.start}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Start recording
        </button>
        <button
          onClick={recordWebcam.stop}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Stop recording
        </button>
        
        {/* <button
          onClick={recordWebcam.download}
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
        >
          <BsDownload/>
        </button> */}
       
       
      </div>
      <div className="mt-4">
        <video ref={recordWebcam.webcamRef} autoPlay muted className="w-full max-w-md" />
      </div>
      
    </div>
  );
}
