import { getUserDataHandlers } from "./getUserData";
import { createReducer } from "../../../core/reduxUtils";

const initialState = {
  currentUser: {},
  userProfile: {},
  error: null,
  signupUserLoading: false,
  loginUserLoading: false,
  userProfileLoading: false,
};

const handlers = {
  ...getUserDataHandlers,
};

const userReducer = createReducer(initialState, handlers);

export default userReducer;
