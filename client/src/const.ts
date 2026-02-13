export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// No OAuth - using standard email/password authentication
export const getLoginUrl = () => {
  return "/login";
};
