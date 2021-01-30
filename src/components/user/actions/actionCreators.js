import {
  GET_LOGIN_USER,
  GET_LOGIN_USER_ERROR,
  GET_SIGNUP_USER,
  GET_SIGNUP_USER_ERROR,
  GET_LOGOUT_USER,
} from "../constants"

export const setLoginUser = data => ({
  type: GET_LOGIN_USER,
  payload: data
})

export const logoutUser = () => ({
  type: GET_LOGOUT_USER,
})

export const setLoginUserError = error => ({
  type: GET_LOGIN_USER_ERROR,
  payload: error
})

export const setSignupUser = data => ({
  type: GET_SIGNUP_USER,
  payload: data
})

export const setSignupUserError = error => ({
  type: GET_SIGNUP_USER_ERROR,
  payload: error
})