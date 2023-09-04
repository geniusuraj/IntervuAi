// actions.ts
import { CLEAR_FEEDBACK, LOADING_QUESTIONS, POST_QUESTION_ANSWER, POST_USER, RECEIVE_QUESTIONS } from "./actionType";
import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk'; // Import ThunkAction


interface LoadingQuestionsAction {
  type: typeof LOADING_QUESTIONS;
}

interface ReceiveQuestionsAction {
  type: typeof RECEIVE_QUESTIONS;
  payload: string[];
}


interface PostQuestionAnswerAction {
    type: typeof POST_QUESTION_ANSWER;
    payload: {
      question: string;
      answer: string;
    };
  }


export const loadingQuestions = () => ({
  type: LOADING_QUESTIONS as typeof LOADING_QUESTIONS,
});

// Define the action creator using Redux Thunk
// export const fetchQuestion = (): ThunkAction<void, {}, null, ReceiveQuestionsAction> => {
//   return async (dispatch: Dispatch) => {
//     dispatch({ type: LOADING_QUESTIONS });

//     try {
//       const res = await axios.get("http://localhost:8080/bot/node");
//       const paragraphs = res.data.split('\n');
//       const questionsArray = paragraphs.filter((paragraph: any) => /^\d+\.\s/.test(paragraph));
//       console.log(questionsArray);

//       // Dispatch the action with the payload
//       dispatch({
//         type: RECEIVE_QUESTIONS,
//         payload: questionsArray,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };
// };

export const fetchQuestion = (tech: string): ThunkAction<void, {}, null, ReceiveQuestionsAction> => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: LOADING_QUESTIONS });

    try {
      const res = await axios.get(`http://localhost:8080/bot/${tech}`);
      const paragraphs = res.data.split('\n');
      const questionsArray = paragraphs.filter((paragraph: any) => /^\d+\.\s/.test(paragraph));
      console.log(questionsArray);

      // Dispatch the action with the payload
      dispatch({
        type: RECEIVE_QUESTIONS,
        payload: questionsArray,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const postQuestionAnswer = (question: string, answer: string): ThunkAction<void, {}, null, ReceiveQuestionsAction> => {
    return async (dispatch: Dispatch) => {
      try {
        const response = await axios.post("http://localhost:8080/bot/answer", {
          question,
          answer,
        });
  
       
        console.log(response.data);


        dispatch({
          type: POST_QUESTION_ANSWER,
          payload: response.data, 
        });
       
      } catch (err) {
        console.error(err);
      }
    };
  };
  

  interface PostUserAction {
    type: typeof POST_USER;
    payload: {
      email: string;
    };
  }
  export const postUser = (email: string): ThunkAction<void, {}, null, PostUserAction> => {
    return async (dispatch: Dispatch) => {
      try {
        await axios.post("http://localhost:8080/bot/user", {
          email,
        });
  // console.log("ok done");
  

      } catch (err) {
        console.error(err);
      }
    };
  };


  export const clearFeedback = () => ({
    type: CLEAR_FEEDBACK,
  });