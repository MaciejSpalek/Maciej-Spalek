import type { DashboardStepTypes } from "types";

export const navigation: { type: DashboardStepTypes; name: string }[] = [
	{
		type: "home",
		name: "Główna",
	},
	{
		type: "crafts",
		name: "Profesje",
	},
	{
		type: "posts",
		name: "Posty",
	},
	{
		type: "articles",
		name: "Artykuły",
	},
];
