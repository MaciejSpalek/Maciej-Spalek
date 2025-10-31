export const URLS = {
	home: "/",
	paintings: "/paintings",
	drawings: "/drawings",
	photography: "/photography",
	contact: "/contact",
	admin: {
		dashboard: "/admin",
		login: "/admin/login",
	},
	article: ({ id }: { id: string }) => `/article/${id}`,
};
