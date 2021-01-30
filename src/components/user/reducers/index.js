import { getUserDataHandlers } from "./getUserData";
import { createReducer } from "../../../core/reduxUtils";


const initialState = {
  currentUser: null,
  error: "4444"
}

const handlers = {
  ...getUserDataHandlers,
}

const userReducer = createReducer(initialState, handlers);

export default userReducer;
