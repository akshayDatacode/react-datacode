import { getQuizTestHandlers } from "./getQuizTestDetails";
import { createReducer } from "../../../core/reduxUtils";

const initialState = {
  currentQuizTest: null,
  quizQuestions: [],
  error: "4444",
};

const handlers = {
  ...getQuizTestHandlers,
};

const quizTestReducer = createReducer(initialState, handlers);

export default quizTestReducer;
