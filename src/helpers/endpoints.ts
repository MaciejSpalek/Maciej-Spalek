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
    LIST: (queryParams: string) => `/post/list${queryParams}`,
    UPDATE: ({ id }: { id: string | undefined }) => `/post/update/${id}`,
    DELETE: ({ id }: { id: string | undefined }) => `/post/delete/${id}`,
  },
  IMAGE: {
    UPLOAD: "image/upload",
  },
  SEND_EMAIL: "email/send",
  LOGIN: "/auth/login",
};
