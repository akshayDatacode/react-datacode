import { SHOW_FOOTER, HIDE_FOOTER } from "../constants";

export const showFooter = (data) => ({
  type: SHOW_FOOTER,
});

export const hideFooter = (data) => ({
  type: HIDE_FOOTER,
});
