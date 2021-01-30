import axios from "axios";
import * as actions from "./actionCreators";
import DatacodeConfig from "../../../core/config";

const baseURL = DatacodeConfig.baseURL;

export const addQuestion = (question) => (dispatch) => {
  return axios
    .put(`${baseURL}quiz/add_question`, question)
    .then((res) => {
      if (res.status === 200) {
        dispatch(actions.setQuizQuestions(res.data.quizQuestion));
        console.log("question", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      console.log("Add Question Error", error);
    });
};

export const createQuizTest = (quizTest) => (dispatch) => {
  console.log("operations", quizTest);
  return axios
    .post(`${baseURL}quiz/create_quiz_test`, quizTest)
    .then((res) => {
      if (res.status === 200) {
        dispatch(actions.setQuizTestDetails(res.data));
        return { success: true, data: res.data};
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      console.log("Create Test Error", error);
    });
};

export const getQuizTestsList = () => (dispatch) => {
  return axios
    .get(`${baseURL}quiz/fetch_quiz_tests`)
    .then(({ data }) => {
      console.log("ddd", data);
      if (data.success) {
        dispatch(actions.setQuizTestsList(data));
        return { success: true, data: data.quizTests };
      }
    })
    .catch((error) => {
      console.log("get quiz tests error", error);
    });
};
