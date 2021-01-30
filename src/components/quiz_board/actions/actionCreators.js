import {
  GET_QUIZ_TEST_DETAILS,
  GET_QUIZ_QUESTIONS,
  GET_QUIZ_TESTS_LIST,
} from "../constants";

export const setQuizTestDetails = (data) => ({
  type: GET_QUIZ_TEST_DETAILS,
  payload: data,
});

export const setQuizQuestions = (data) => ({
  type: GET_QUIZ_QUESTIONS,
  payload: data,
});

export const setQuizTestsList = (data) => ({
  type: GET_QUIZ_TESTS_LIST,
  payload: data,
});
