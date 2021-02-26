import {
  SET_TUTORIALS_LIST,
  SET_TUTORIALS_BY_ID,
  SET_TUTORIALS_BY_USERNAME,
} from "../constants";

export const setTutorialsList = (data) => ({
  type: SET_TUTORIALS_LIST,
  payload: data,
});

export const setTutorialById = (data) => ({
  type: SET_TUTORIALS_BY_ID,
  payload: data,
});

export const setTutorialsByUserName = (data) => ({
  type: SET_TUTORIALS_BY_USERNAME,
  payload: data,
});
