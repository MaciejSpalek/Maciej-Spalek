export const ENDPOINTS = {
  HOME: {
    UPDATE_OR_CREATE: "/home/create",
    GET: "/home/get",
  },
  CRAFT: {
    UPDATE_OR_CREATE: "/craft/create-or-update",
    GET: "/craft/get",
  },
  POST: {
    CREATE: "/post/create",
    GET: "/post/get/:id",
    LIST: (queryParams) => `/post/list${queryParams}`,
    UPDATE: ({ id }) => `/post/update/${id}`,
    DELETE: ({ id }) => `/post/delete/${id}`,
  },
  IMAGE: {
    UPLOAD: "image/upload",
  },
};
