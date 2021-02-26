import { setTutorialsHandlers } from "./setTutorials";
import { createReducer } from "../../../../core/reduxUtils";

const initialState = {
  tutorialsList: [],
  tutorial: {},
  tutorialByUser: [],
  addTutorialLoading: false,
  tutorialListLoading: false,
  error: "4444",
};

const handlers = {
  ...setTutorialsHandlers,
};

const tutorialReducer = createReducer(initialState, handlers);

export default tutorialReducer;
