import * as constants from "../constants";

const setTutorialsList = (state, action) => {
  console.log("dispatch Tutorials", action.payload.tutorial);
  return {
    ...state,
    error: null,
    tutorialsList: action.payload.tutorial,
  };
};

export const setTutorialsHandlers = {
  [constants.SET_TUTORIALS_LIST]: setTutorialsList,
};
