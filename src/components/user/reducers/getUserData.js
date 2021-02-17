import * as constants from "../constants";

const getLoginUser = (state, action) => {
  localStorage.setItem("userDetails", JSON.stringify(action.payload));

  return {
    ...state,
    error: null,
    currentUser: action.payload,
    loginUserLoading: !state.loginUserLoading,
  };
};

const setLoginUserLoading = (state) => ({
  ...state,
  loginUserLoading: !state.loginUserLoading,
});

const getLogoutUser = (state) => {
  localStorage.clear();
  return {
    ...state,
    currentUser: null,
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

export const getUserDataHandlers = {
  [constants.GET_LOGIN_USER]: getLoginUser,
  [constants.GET_LOGIN_USER_ERROR]: getLoginUserFailure,
  [constants.GET_SIGNUP_USER]: getSignupUser,
  [constants.GET_SIGNUP_USER_ERROR]: getSignupUserFailure,
  [constants.GET_LOGOUT_USER]: getLogoutUser,
  [constants.SET_SIGNUP_USER_LOADING]: setSignupUserLoading,
  [constants.SET_LOGIN_USER_LOADING]: setLoginUserLoading,
};
