import * as constants from "../constants";

const setShowFooter = (state, action) => {
  return {
    ...state,
    isShowFooter: true,
  };
};

const setHideFooter = (state, action) => {
  return {
    ...state,
    isShowFooter: false,
  };
};

const setShowAddTutorial = (state, action) => {
  return {
    ...state,
    isShowAddTutorial: true,
  };
};

const setHideAddTutorial = (state, action) => ({
  ...state,
  isShowAddTutorial: false,
});

const setAddTestimonial = (state, action) => {
  return {
    ...state,
    showTestimonial: !state.showTestimonial,
  };
};

export const getAppHandlers = {
  [constants.SHOW_FOOTER]: setShowFooter,
  [constants.HIDE_FOOTER]: setHideFooter,
  [constants.SHOW_ADD_TUTORIAL]: setShowAddTutorial,
  [constants.HIDE_ADD_TUTORIAL]: setHideAddTutorial,
  [constants.SHOW_ADD_TESTIMONIAL]: setAddTestimonial,
};
