import * as constants from "../constants";

const setLocalUser = (state, action) => {
  localStorage.setItem("userDetails", JSON.stringify(action.payload));
  console.log("local Redux User", action.payload);
  return {
    ...state,
    error: null,
    currentUser: action.payload,
  };
};

const getLoginUser = (state, action) => {
  localStorage.setItem("userDetails", JSON.stringify(action.payload));
  return {
    ...state,
    error: null,
    currentUser: action.payload,
    loginUserLoading: !state.loginUserLoading,
  };
};

const setLoginUserLoading = (state) => {
  return {
    ...state,
    loginUserLoading: !state.loginUserLoading,
  };
};

const getLogoutUser = (state) => {
  localStorage.setItem("userDetails", JSON.stringify({}));
  return {
    ...state,
    currentUser: {},
    userProfile: {},
  };
};

const getLoginUserFailure = (state, action) => ({
  ...state,
  error: action.payload,
});

const getSignupUser = (state, action) => {
  localStorage.setItem("userDetails", JSON.stringify(action.payload));
  return {
    ...state,
    error: null,
    currentUser: action.payload,
    signupUserLoading: !state.signupUserLoading,
  };
};

const setSignupUserLoading = (state) => ({
  ...state,
  signupUserLoading: !state.signupUserLoading,
});

const getSignupUserFailure = (state, action) => ({
  ...state,
  error: action.payload,
});

// user Profile

const setUserProfile = (state, action) => {
  return {
    ...state,
    error: null,
    userProfile: action.payload,
    userProfileLoading: !state.userProfileLoading,
  };
};

const setUserProfileLoading = (state) => ({
  ...state,
  userProfileLoading: !state.userProfileLoading,
});

export const getUserDataHandlers = {
  [constants.GET_LOGIN_USER]: getLoginUser,
  [constants.GET_LOGIN_USER_ERROR]: getLoginUserFailure,
  [constants.GET_SIGNUP_USER]: getSignupUser,
  [constants.GET_SIGNUP_USER_ERROR]: getSignupUserFailure,
  [constants.GET_LOGOUT_USER]: getLogoutUser,
  [constants.SET_SIGNUP_USER_LOADING]: setSignupUserLoading,
  [constants.SET_LOGIN_USER_LOADING]: setLoginUserLoading,
  [constants.SET_USER_PROFILE]: setUserProfile,
  [constants.SET_USER_PROFILE_LOADING]: setUserProfileLoading,
  [constants.SET_LOCAL_USER]: setLocalUser,
};
