import React from "react";
import { Anchor } from "./ListRenderer.styled";
import { useRouter } from "next/router";
import Link from "next/link";

interface INavigation {
  href: string;
  text: string;
}
interface IListRenderer {
  navigation: INavigation[];
  toggle: () => void;
  isOpen?: boolean;
}

export const ListRenderer = ({
  navigation,
  toggle,
  isOpen,
}: IListRenderer): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <>
      {navigation.map(({ href, text }) => (
        <li key={text} aria-hidden={!isOpen}>
          <Link href={href} passHref>
            <Anchor onClick={toggle} isActive={pathname === href}>
              {text.toUpperCase()}
            </Anchor>
          </Link>
        </li>
      ))}
    </>
  );
};
