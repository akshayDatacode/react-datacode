import {
  SHOW_FOOTER,
  HIDE_FOOTER,
  SHOW_ADD_TUTORIAL,
  HIDE_ADD_TUTORIAL,
} from "../constants";

export const showFooter = (data) => ({
  type: SHOW_FOOTER,
});

export const hideFooter = (data) => ({
  type: HIDE_FOOTER,
});

export const showAddTutorial = (data) => ({
  type: SHOW_ADD_TUTORIAL,
});

export const hideAddTutorial = (data) => ({
  type: HIDE_ADD_TUTORIAL,
});
