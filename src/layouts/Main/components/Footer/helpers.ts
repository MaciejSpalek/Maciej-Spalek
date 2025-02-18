import { URLS } from "helpers";

export const footerInfo = [
    {
      title: "Navigation",
      list: [
        { name: "Home", href: URLS.home },
        { name: "Paintings", href: URLS.paintings },
        { name: "Drawings", href: URLS.drawings },
        { name: "Photography", href: URLS.photography },
      ],
    },
    {
      title: "Socials",
      isSocial: true,
      list: [
        { name: "Instagram", href: 'https://www.instagram.com/spwrtt/' },
        { name: "Facebook", href: 'https://www.facebook.com/MaciekSpalek/' },
      ],
    },
  ];