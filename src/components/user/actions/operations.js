import axios from "axios";
import * as actions from "./actionCreators";
import DatacodeConfig from "../../../core/config";

const baseURL = DatacodeConfig.baseURL;

export const setLocalUser = (user) => (dispatch) => {
  debugger;
  dispatch(actions.setLoginUser(user));
};

export const loginUser = (user) => (dispatch) => {
  return axios
    .post(`${baseURL}user/login`, user)
    .then((res) => {
      if (res.status === 200) {
        dispatch(actions.setLoginUser(res.data));
        return { success: true, data: res.data };
      } else {
        return { success: false };
      }
    })
    .catch((error) => {
      dispatch(actions.setLoginUserError(error));
      console.log("Login error", error);
    });
};

export const signupUser = (user) => (dispatch) => {
  console.log("ccccccccccccccccccc", user);
  return axios
    .post(`${baseURL}user/signup`, user)
    .then((res) => {
      if (res.status === 200) {
        dispatch(actions.setSignupUser(res.data));
        console.log("Signed yu", res.data);
        return { success: true, data: res.data };
      }
    })
    .catch((error) => {
      dispatch(actions.setSignupUserError(error));
      console.log("Signup error", error);
    });
};

export const forgotPassword = (user) => (dispatch) => {
  return axios
    .post(`${baseURL}user/forgot-password`, user)
    .then((res) => {
      if (res.status === 200) {
        console.log("Forgot Password", res.data);
        return { success: true, data: res.data };
      }
    })
    .catch((error) => {
      console.log("Forgot Password error", error);
    });
};
