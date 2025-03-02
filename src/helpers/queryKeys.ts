export const QUERY_KEYS = {
  POST: {
    LIST: <T>(filters: T) => ["POST_LIST", filters],
  },
  ARTICLE: {
    LIST: ["ARTICLES_LIST"],
  },
};
