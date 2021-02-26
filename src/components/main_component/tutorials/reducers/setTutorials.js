import * as constants from "../constants";

const setTutorialsList = (state, action) => {
  return {
    ...state,
    error: null,
    tutorialsList: action.payload.tutorial,
    tutorialListLoading: !state.tutorialListLoading,
  };
};

const setTutorialById = (state, action) => {
  return {
    ...state,
    error: null,
    tutorial: action.payload.tutorial,
    tutorialListLoading: !state.tutorialListLoading,
  };
};

const setTutorialsByUserName = (state, action) => {
  return {
    ...state,
    error: null,
    tutorialByUser: action.payload.tutorial,
    tutorialListLoading: !state.tutorialListLoading,
  };
};

const setAddTutorialLoading = (state) => ({
  ...state,
  addTutorialLoading: !state.addTutorialLoading,
});

const setTutorialListLoading = (state) => ({
  ...state,
  tutorialListLoading: !state.tutorialListLoading,
});

export const setTutorialsHandlers = {
  [constants.SET_TUTORIALS_LIST]: setTutorialsList,
  [constants.SET_TUTORIALS_BY_ID]: setTutorialById,
  [constants.SET_ADD_TUTORIAL_LOADING]: setAddTutorialLoading,
  [constants.SET_TUTORIALS_LIST_LOADING]: setTutorialListLoading,
  [constants.SET_TUTORIALS_BY_USERNAME]: setTutorialsByUserName,
};
