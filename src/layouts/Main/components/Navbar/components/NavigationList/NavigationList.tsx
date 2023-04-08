import React from "react";
import { List, Anchor } from "./NavigationList.styled";
import { navigation } from "../../helpers";
import { useRouter } from "next/router";
import Link from "next/link";

interface INavigationList {
  toggle?: () => void;
}

export const NavigationList = ({ toggle }: INavigationList) => {
  const { pathname } = useRouter();

  return (
    <List>
      {navigation.map(({ href, text }) => (
        <li key={text}>
          <Link href={href}>
            <Anchor onClick={toggle} isActive={pathname === href}>
              {text}
            </Anchor>
          </Link>
        </li>
      ))}
    </List>
  );
};
