import axios from "axios";

import * as actions from "./actionCreators";
import DatacodeConfig from "../../core/config";
import { SET_SUBSCRIBE_NEWS_LETTER, SET_SUBSCRIBE_LOADING } from "../constants";

const baseURL = DatacodeConfig.baseURL;

export const newsLetterSubscribe = (email) => (dispatch) => {
  dispatch({ type: SET_SUBSCRIBE_NEWS_LETTER });
  return axios
    .post(`${baseURL}/user/subscribe-letter`, email)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_SUBSCRIBE_NEWS_LETTER });
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_SUBSCRIBE_NEWS_LETTER });
      console.log("Add subscribe Error", error);
    });
};
