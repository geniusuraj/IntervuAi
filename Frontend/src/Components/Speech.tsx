import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Speech = () => {
  const [text, setText] = useState('');
  const [listening,setListening]=useState(false)

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  
  
  const resetTranscript = () => {
    SpeechRecognition.stopListening();
    setText(''); // Clear the textarea
    SpeechRecognition.startListening(); // Restart listening
  };
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
    
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Speech to Text Converter</h2>

        <div className="main-content border rounded p-4 mb-4">
          {transcript}
        </div>

        <div className="btn-style">
          <textarea
            name=""
            id=""
            value={transcript}
            onChange={(e) => setText(transcript)}
            className="w-full border rounded p-2 mb-4"
            placeholder="Transcript..."
          />
          <button onClick={startListening} className='bg-blue-500 text-white px-4 py-2 font-medium rounded-full mr-2 hover:bg-blue-600'>
            Start Listening
          </button>
          <button onClick={SpeechRecognition.stopListening} className='bg-red-500 text-white px-4 py-2 font-medium rounded-full mr-2 hover:bg-red-600'>
            Stop Listening
          </button>
          <button onClick={resetTranscript} className='bg-gray-500 text-white px-4 py-2 font-medium rounded-full hover:bg-gray-600'>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Speech;
