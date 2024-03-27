interface IPostListQuery {
  type?: string;
}

export const QUERY_KEYS = {
  POST: {
    LIST: (filters?: IPostListQuery) => ["POST_LIST", filters],
  },
};
