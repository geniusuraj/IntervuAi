import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const VideoRecorder = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

  const startRecording = () => {
    if (webcamRef.current) {
      const mediaStream = webcamRef.current.video!.srcObject as MediaStream;
      mediaRecorderRef.current = new MediaRecorder(mediaStream);

      const chunks: Blob[] = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        setVideoBlob(blob);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };
  return (
    <div>
      <Webcam
        audio={true}
        ref={webcamRef}
        width={500}
        height={10}
        screenshotFormat="image/jpeg"
      />
      <button onClick={startRecording} disabled={recording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!recording}>
        Stop Recording
      </button>
      {/* {videoBlob && (
        <video
          controls
          src={URL.createObjectURL(videoBlob)}
          width={450}
          height={200}
        />
      )} */}
    </div>
  );
};

export default VideoRecorder;
