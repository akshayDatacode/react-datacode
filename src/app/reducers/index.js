import { getAppHandlers } from "./getUserData";
import { createReducer } from "../../core/reduxUtils";

const initialState = {
  isShowFooter: false,
  isShowAddTutorial: false,
  showTestimonial: false,
  addTestimonialLoading: false,
};

const handlers = {
  ...getAppHandlers,
};

const appReducer = createReducer(initialState, handlers);

export default appReducer;
