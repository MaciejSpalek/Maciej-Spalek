export const getQueryParams = (paramsObject) => {
  if (!Object.keys(paramsObject).length) return "";
  return "?" + new URLSearchParams(paramsObject).toString();
};
