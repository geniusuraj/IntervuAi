import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Video from './Video';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestion, postQuestionAnswer, postUser } from '../Redux/nodeReducer/action';
import { NEXT_QUESTION } from '../Redux/nodeReducer/actionType';
import { useParams } from 'react-router-dom';
import Header from './Header';

const Speech2 = () => {
  const [text, setText] = useState('');
  const [interviewStart, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrent] = useState(0);

  let { tech = '' } = useParams();



  const questions = useSelector((state: any) => state.questions);
  const loading = useSelector((state: any) => state.loading);
 const currentQuestionIndex = useSelector((state:any) => state.currentQuestionIndex)
 let feedback = useSelector((state: any) => state.feedback)
console.log(feedback);


 
const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchQuestion(tech)); 
  }, [dispatch,tech]);

 const handleStartInterview = () => {
    setInterviewStarted(true);
    dispatch<any>(postUser("moumita@gmail.com"));
  };

 

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const resetTranscript = () => {
    SpeechRecognition.stopListening();
    setText(''); 
    SpeechRecognition.startListening(); 
  };


  
  const { listening, transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }


  
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
    
      dispatch<any>(postQuestionAnswer(questions[currentQuestion], transcript));
      setCurrent(currentQuestion + 1);
     
      resetTranscript()
      
      console.log(questions[currentQuestion],transcript);
    
    }
  };

 
  

  return (

    <>
    {/* <Header/> */}
    <div className="flex">
      <div className="w-1/2">
        <Video />
      </div>
      <div className="w-1/2 p-4 border-cyan-800">
        <div className="container mx-auto p-4 shadow-lg bg-teal-100 rounded">
          

       
          
{
  loading?"Loading...":
  <button onClick={handleStartInterview} className='bg-gray-500 text-white px-4 py-2 font-medium rounded-full hover:bg-gray-600'>
 {interviewStart?"":"Start interview"}
 
  
</button>
}



    {interviewStart && (
            <>
              <h3 className="text-lg font-bold mb-4 text-neutral-900">{questions[currentQuestion]}</h3>
              <button  onClick={handleNextQuestion} className='bg-gray-500 text-white px-4 py-2 mb-5 font-medium rounded-full hover:bg-gray-600'>
                  Next
                </button>
            
            
              
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
                  {listening ? "Listening..." : "Start listening"}
                </button>
                <button onClick={SpeechRecognition.stopListening} className='bg-red-500 text-white px-4 py-2 font-medium rounded-full mr-2 hover:bg-red-600'>
                  Stop Listening
                </button>
                {/* <button className='bg-red-500 text-white px-4 py-2 font-medium rounded-full mr-2 hover:bg-red-600'>
                  Submit
                </button> */}
                <button onClick={resetTranscript} className='bg-gray-500 text-white px-4 py-2 font-medium rounded-full hover:bg-gray-600'>
                  Reset
                </button>
              
              </div>

<br />
              <div>
                
               <p><b>Communication Skill:</b> {feedback.communicationSkill}</p> 
               <p><b>Problem Solving Skill:</b> {feedback.problemSolving}</p>
                <p><b>Subject Experties</b>: {feedback.subjectExperties}</p>
            
               <p><b>Feedback:</b>  {feedback.feedBackMessage}</p>

               
              </div>
            </>
          )}
         

        
           
         
        </div>

          
       
      </div>
    </div>
    </>
  );
};

export default Speech2;
