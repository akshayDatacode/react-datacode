import * as constants from "../constants";

const getQuizTestDetails = (state, action) => {
  console.log("dispatch Quiz", action.payload);
  return {
    ...state,
    error: null,
    currentQuizTest: action.payload.quizTest,
  };
};

const getQuizQuestions = (state, action) => {
  console.log("dispatch Quiz Questions", action.payload);
  let quizQuestionsTemp = state.quizQuestions;
  quizQuestionsTemp.push(action.payload);
  console.log("quizTemp", quizQuestionsTemp);
  return {
    ...state,
    error: null,
    quizQuestions: quizQuestionsTemp,
  };
};

export const getQuizTestHandlers = {
  [constants.GET_QUIZ_TEST_DETAILS]: getQuizTestDetails,
  [constants.GET_QUIZ_QUESTIONS]: getQuizQuestions,
};
