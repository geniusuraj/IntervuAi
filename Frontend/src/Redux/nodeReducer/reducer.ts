import { CLEAR_FEEDBACK, LOADING_FEEDBACK, LOADING_QUESTIONS, NEXT_QUESTION, POST_QUESTION_ANSWER, RECEIVE_QUESTIONS, START_INTERVIEW } from "./actionType";

interface State {
    interviewStarted: boolean;
    currentQuestionIndex: number;
    questions: string[];
    loading: boolean;
    feedback: Object;
   
  }
  
  const initialState: State = {
    interviewStarted: false,
    currentQuestionIndex: 0,
    questions: [],
    loading: false,
    feedback: {},
    
  };


  interface PostQuestionAnswerAction {
    type: typeof POST_QUESTION_ANSWER;
    payload: {
      question: string;
      answer: string;
    };
  }


const reducer=(state=initialState,action: any)=>{
    switch(action.type){

        
            case LOADING_QUESTIONS:{
                return {
                    ...state,
                    loading:true
                }
            }

            case START_INTERVIEW:{
                return{
                    ...state,
                    loading:false,
                    interviewStarted:true
                }
            }

            case NEXT_QUESTION:{
                return {
                    ...state,
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                };
            }
           
            case RECEIVE_QUESTIONS:{
                return {
                    ...state,
                    loading:false,
                    questions: action.payload,
                };
            }


            case POST_QUESTION_ANSWER: {
              
                return {
                  ...state,
                
                  currentQuestionIndex: state.currentQuestionIndex + 1,
                 
                  feedback: action.payload
                };
              }

             
              case CLEAR_FEEDBACK:{
                return{
                  ...state,
                  feedback:null
                }
              }
            default:{
                return state
            }
    }
}

export default reducer;

