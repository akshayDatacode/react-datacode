import axios from "axios";
import * as actions from "./actionCreators";
import DatacodeConfig from "../../../../core/config";

const baseURL = DatacodeConfig.baseURL;

export const addTutorial = (tutorial) => (dispatch) => {
  return axios
    .post(`${baseURL}/tutorial/add_tutorial`, tutorial)
    .then((res) => {
      if (res.status === 200) {
        console.log("Tutorial", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      console.log("Add Tutorial Error", error);
    });
};

export const getTutorialsList = (technology) => (dispatch) => {
  return axios
    .post(`${baseURL}/tutorial/get_tutorial`, { technology })
    .then(({ data }) => {
      if (data.success) {
        dispatch(actions.setTutorialsList(data));
        return { success: true, data: data.tutorial };
      }
    })
    .catch((error) => {
      console.log("get tutorials error", error);
    });
};

export const likeTutorial = (data) => (dispatch) => {
  return axios
    .put(`${baseURL}/tutorial/like_tutorial`, data)
    .then(({ data }) => {
      if (data.success) {
        return { success: true, data: data.tutorial };
      }
    })
    .catch((error) => {
      console.log("get tutorials error", error);
    });
};

export const unlikeTutorial = (data) => (dispatch) => {
  return axios
    .put(`${baseURL}/tutorial/unlike_tutorial`, data)
    .then(({ data }) => {
      if (data.success) {
        return { success: true, data: data.tutorial };
      }
    })
    .catch((error) => {
      console.log("get tutorials error", error);
    });
};
