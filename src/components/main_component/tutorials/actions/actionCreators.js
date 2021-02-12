import { SET_TUTORIALS_LIST } from "../constants";

export const setTutorialsList = (data) => ({
  type: SET_TUTORIALS_LIST,
  payload: data,
});
