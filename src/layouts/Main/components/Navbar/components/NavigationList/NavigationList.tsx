import React from "react";
import { List, Anchor } from "./NavigationList.styled";
import { leftNavigation, rightNavigation } from "../../helpers";
import { useRouter } from "next/router";
import Link from "next/link";
import { Logo } from "components";

interface INavigationList {
  toggle?: () => void;
}

export const NavigationList = ({ toggle }: INavigationList) => {
  const { pathname } = useRouter();

  const navigationRenderer = (navigation) =>
    navigation.map(({ href, text }) => (
      <li key={text}>
        <Link href={href}>
          <Anchor onClick={toggle} isActive={pathname === href}>
            {text.toUpperCase()}
          </Anchor>
        </Link>
      </li>
    ));

  return (
    <List>
      {navigationRenderer(leftNavigation)}
      <Logo />
      {navigationRenderer(rightNavigation)}
    </List>
  );
};
