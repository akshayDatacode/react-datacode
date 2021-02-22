import * as constants from "../constants";

const setTutorialsList = (state, action) => {
  return {
    ...state,
    error: null,
    tutorialsList: action.payload.tutorial,
  };
};

const setTutorialById = (state, action) => {
  return {
    ...state,
    error: null,
    tutorial: action.payload.tutorial,
  };
};

export const setTutorialsHandlers = {
  [constants.SET_TUTORIALS_LIST]: setTutorialsList,
  [constants.SET_TUTORIALS_BY_ID]: setTutorialById,
};
