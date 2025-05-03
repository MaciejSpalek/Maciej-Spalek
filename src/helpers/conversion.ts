export const getQueryParams = (
  paramsObject?: Record<string, string | number | boolean | undefined>
) => {
  if (!paramsObject || !Object.keys(paramsObject).length) return "";

  const stringParams: Record<string, string> = {};

  Object.entries(paramsObject).forEach(([key, value]) => {
    if (value !== undefined) {
      stringParams[key] = String(value);
    }
  });

  return "?" + new URLSearchParams(stringParams).toString();
};
