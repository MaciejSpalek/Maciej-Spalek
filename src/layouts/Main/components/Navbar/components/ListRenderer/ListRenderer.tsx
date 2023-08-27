import React from "react";
import { Anchor } from "./ListRenderer.styled";
import { useRouter } from "next/router";
import Link from "next/link";

interface IListRenderer {
  navigation: any;
  toggle: () => void;
}

export const ListRenderer = ({ navigation, toggle }: IListRenderer) => {
  const { pathname } = useRouter();

  return navigation.map(({ href, text }) => (
    <li key={text}>
      <Link href={href} passHref>
        <Anchor onClick={toggle} isActive={pathname === href}>
          {text.toUpperCase()}
        </Anchor>
      </Link>
    </li>
  ));
};
