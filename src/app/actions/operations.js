import axios from "axios";

import * as actions from "./actionCreators";
import DatacodeConfig from "../../core/config";
import {
  SET_SUBSCRIBE_NEWS_LETTER,
  SET_SUBSCRIBE_LOADING,
  SET_ADD_TESTIMONIAL_LOADING,
  SET_ADD_TESTIMONIAL,
} from "../constants";

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

export const addTestimonial = (tutorial) => (dispatch) => {
  dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
  return axios
    .post(`${baseURL}/tutorial/add_tutorial`, tutorial)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: SET_ADD_TESTIMONIAL });
        console.log("Testimonial", res.data);
        return { success: true };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_ADD_TESTIMONIAL_LOADING });
      console.log("Add Testimonial Error", error);
    });
};
