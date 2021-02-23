import axios from "axios";
import * as actions from "./actionCreators";
import DatacodeConfig from "../../../core/config";
import {
  SET_SIGNUP_USER_LOADING,
  SET_LOGIN_USER_LOADING,
  SET_USER_PROFILE_LOADING,
} from "../constants";

const baseURL = DatacodeConfig.baseURL;

export const setLocalUser = (user) => (dispatch) => {
  dispatch(actions.setLoginUser(user));
};

export const loginUser = (user) => (dispatch) => {
  dispatch({ type: SET_LOGIN_USER_LOADING });
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
      dispatch({ type: SET_LOGIN_USER_LOADING });
      dispatch(actions.setLoginUserError(error));
      console.log("Login error", error);
    });
};

export const signupUser = (user) => (dispatch) => {
  dispatch({ type: SET_SIGNUP_USER_LOADING });
  return axios
    .post(`${baseURL}user/signup`, user)
    .then((res) => {
      console.log("ssss", res);
      if (res.status === 200) {
        dispatch(actions.setSignupUser(res.data));
        console.log("Signed yu", res.data);
        return { success: true, data: res.data };
      }
      if (res.status === 400) {
        debugger;
        return { error: res.message };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_SIGNUP_USER_LOADING });
      dispatch(actions.setSignupUserError(error));
      console.log("Signup error", error.message);
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

export const getUserProfile = (email) => (dispatch) => {
  dispatch({ type: SET_USER_PROFILE_LOADING });
  return axios
    .post(`${baseURL}/user/get-profile`, { email })
    .then(({ data }) => {
      if (data.success) {
        console.log("User Profile:__", data.userProfile);
        dispatch(actions.setUserProfile(data.userProfile));
        return { success: true, data: data.userProfile };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_USER_PROFILE_LOADING });
      console.log("get userProfile error", error);
    });
};

export const editUserProfile = (user) => (dispatch) => {
  dispatch({ type: SET_USER_PROFILE_LOADING });
  return axios
    .put(`${baseURL}/user/edit-profile`, user)
    .then(({ data }) => {
      if (data.success) {
        console.log("User Profile:__", data.userProfile);
        dispatch(actions.setUserProfile(data.userProfile));
        return { success: true, data: data.userProfile };
      }
    })
    .catch((error) => {
      dispatch({ type: SET_USER_PROFILE_LOADING });
      console.log("get userProfile error", error);
    });
};

export const setUserImgDetails = (data) => (dispatch) => {
  dispatch({ type: SET_USER_PROFILE_LOADING });
  return axios
    .post(`https://api.cloudinary.com/v1_1/datacode/image/upload`, data)
    .then(({ data }) => {
      console.log("User Profile:__", data);
      dispatch({ type: SET_USER_PROFILE_LOADING });
      return { success: true, data: data.url };
    })
    .catch((error) => {
      dispatch({ type: SET_USER_PROFILE_LOADING });
      console.log("get userProfile error", error);
    });
};

export const googleLogin = (data) => (dispatch) => {
  return axios
    .get(`${baseURL}/user/google`)
    .then(({ data }) => {
      console.log("User Profile:__", data);
      return { success: true, data: data.url };
    })
    .catch((error) => {
      console.log("get userProfile error", error);
    });
};

export const saveToLibrary = (data) => (dispatch) => {
  return axios
    .put(`${baseURL}/user/save-to-library`, data)
    .then(({ data }) => {
      if (data.success) {
        dispatch(actions.setUserProfile(data.user));
        return { success: true, data: data.user };
      }
    })
    .catch((error) => {
      console.log("save to library error", error);
    });
};

export const unsaveFromLibrary = (data) => (dispatch) => {
  return axios
    .put(`${baseURL}/user/unsave-from-library`, data)
    .then(({ data }) => {
      if (data.success) {
        console.log("User Profile:__", data.userProfile);
        dispatch(actions.setUserProfile(data.user));
        return { success: true, data: data.userProfile };
      }
    })
    .catch((error) => {
      console.log("save to library error", error);
    });
};
