// actions.ts
import { LOADING_QUESTIONS, POST_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "./actionType";
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
export const fetchQuestion = (): ThunkAction<void, {}, null, ReceiveQuestionsAction> => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: LOADING_QUESTIONS });

    try {
      const res = await axios.get("http://localhost:8080/bot/node");
      const paragraphs = res.data.split('\n');
      const questionsArray = paragraphs.filter((paragraph: any) => /^\d+\.\s/.test(paragraph));

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
  
        // Log the response
        console.log(response);
  
        // Dispatch any action you need here if necessary
      } catch (err) {
        console.error(err);
      }
    };
  };
  