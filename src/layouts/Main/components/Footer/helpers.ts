import { URLS } from "helpers";

export const footerInfo = [
	{
		title: "Podstrony",
		list: [
			{ name: "Główna", href: URLS.home },
			{ name: "Obrazy", href: URLS.paintings },
			{ name: "Rysunki", href: URLS.drawings },
			{ name: "Fotografia", href: URLS.photography },
		],
	},
	{
		title: "Social Media",
		isSocial: true,
		list: [
			{ name: "Instagram", href: "https://www.instagram.com/spwrtt/" },
			{
				name: "Facebook",
				href: "https://www.facebook.com/profile.php?id=61583029648396",
			},
		],
	},
];
