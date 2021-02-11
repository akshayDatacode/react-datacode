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

export const getAppHandlers = {
  [constants.SHOW_FOOTER]: setShowFooter,
  [constants.HIDE_FOOTER]: setHideFooter,
};
