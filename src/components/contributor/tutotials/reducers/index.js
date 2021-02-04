import { setTutorialsHandlers } from "./setTutorials";
import { createReducer } from "../../../../core/reduxUtils";

const initialState = {
  tutorialsList = [],
  error: "4444",
};

const handlers = {
  ...setTutorialsHandlers,
};

const tutorialReducer = createReducer(initialState, handlers);

export default tutorialReducer;
