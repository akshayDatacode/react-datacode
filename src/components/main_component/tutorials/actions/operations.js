import axios from "axios";

import * as actions from "./actionCreators";
import DatacodeConfig from "../../../../core/config";
import {
  SET_ADD_TUTORIAL_LOADING,
  SET_TUTORIALS_LIST_LOADING,
} from "../constants";

const baseURL = DatacodeConfig.baseURL;

export const addTutorial = (tutorial) => (dispatch) => {
  dispatch({ type: SET_ADD_TUTORIAL_LOADING });
  return axios
    .post(`${baseURL}/tutorial/add_tutorial`, tutorial)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_ADD_TUTORIAL_LOADING });
        console.log("Tutorial", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ADD_TUTORIAL_LOADING });
      console.log("Add Tutorial Error", error);
    });
};

export const linkPreview = (link) => (dispatch) => {
  dispatch({ type: SET_ADD_TUTORIAL_LOADING });
  return axios
    .post(`${baseURL}/tutorial/link_preview`, { link })
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_ADD_TUTORIAL_LOADING });
        console.log("Tutorial", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ADD_TUTORIAL_LOADING });
      console.log("Add Tutorial Error", error);
    });
};

export const getTutorialsList = (technology) => (dispatch) => {
  dispatch({ type: SET_TUTORIALS_LIST_LOADING });
  return axios
    .post(`${baseURL}/tutorial/get_tutorial_list`, { technology })
    .then(({ data }) => {
      if (data.success) {
        dispatch(actions.setTutorialsList(data));
        return { success: true, data: data.tutorial };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_TUTORIALS_LIST_LOADING });
      console.log("get tutorials error", error);
    });
};

export const getTutorialById = (id) => (dispatch) => {
  dispatch({ type: SET_TUTORIALS_LIST_LOADING });
  return axios
    .post(`${baseURL}/tutorial/get_tutorial`, { id })
    .then(({ data }) => {
      if (data.success) {
        dispatch(actions.setTutorialById(data));
        return { success: true, data: data.tutorial };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_TUTORIALS_LIST_LOADING });
      console.log("get tutorials error", error);
    });
};

export const getTutorialByUserName = (userName) => (dispatch) => {
  dispatch({ type: SET_TUTORIALS_LIST_LOADING });
  return axios
    .post(`${baseURL}/tutorial/get_tutorial_by_username`, { userName })
    .then(({ data }) => {
      if (data.success) {
        dispatch(actions.setTutorialsByUserName(data));
        return { success: true, data: data.tutorial };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_TUTORIALS_LIST_LOADING });
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

export const commentTutorial = (data) => (dispatch) => {
  return axios
    .put(`${baseURL}/tutorial/comment_tutorial`, data)
    .then(({ data }) => {
      if (data.success) {
        dispatch(actions.setTutorialById(data));
        return { success: true, data: data.tutorial };
      }
    })
    .catch((error) => {
      console.log("comment tutorials error", error);
    });
};

export const removeTutorial = (id) => (dispatch) => {
  return axios
    .put(`${baseURL}/tutorial/delete_tutorial`, { id })
    .then(({ data }) => {
      if (data.success) {
        console.log("after delete", data);
        dispatch(getTutorialByUserName(data.tutorial.userName));
        return { success: true, data: data.tutorial };
      }
    })
    .catch((error) => {
      console.log("get tutorials error", error);
    });
};

export const editTutorial = (data) => (dispatch) => {
  dispatch({ type: SET_ADD_TUTORIAL_LOADING });
  return axios
    .put(`${baseURL}/tutorial/edit_tutorial`, data)
    .then(({ data }) => {
      if (data.success) {
        console.log("after edit", data);
        dispatch({ type: SET_ADD_TUTORIAL_LOADING });
        dispatch(getTutorialByUserName(data.tutorial.userName));
        return { success: true };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ADD_TUTORIAL_LOADING });
      console.log("get tutorials error", error);
    });
};
