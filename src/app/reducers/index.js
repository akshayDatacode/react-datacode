import { getAppHandlers } from "./getUserData";
import { createReducer } from "../../core/reduxUtils";

const initialState = {
  isShowFooter: false,
};

const handlers = {
  ...getAppHandlers,
};

const appReducer = createReducer(initialState, handlers);

export default appReducer;
