import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const SpeechToText = () => {

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
        
      } = useSpeechRecognition();

      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => SpeechRecognition.startListening()}>Start</button>
      <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
      <button onClick={() => resetTranscript()}>Reset</button>
      <textarea className='overflow-scroll' value={transcript} />
  </div>
  )
}

export default SpeechToText