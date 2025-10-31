import React from "react";
import { navigation } from "./helpers";
import { List, ListItem, Button as NavButton } from "./Navigation.styled";
import { INavigation } from "./Navigation.model";
import { COOKIES, deleteCookie } from "helpers/cookies";
import { useRouter } from "next/router";
import { URLS } from "helpers";

export const Navigation = ({ step, setStep }: INavigation) => {
  const router = useRouter();
  const logout = () => {
    deleteCookie(COOKIES.MS_AUTH_TOKEN);
    router.push(URLS.admin.login);
  };
  
  return (
    <List>
      {navigation.map((element) => (
        <ListItem key={element}>
          <NavButton
            isActive={step === element}
            onClick={() => setStep(element)}
          >
            {element.toUpperCase()}
          </NavButton>
        </ListItem>
      ))}
      <ListItem>
        <NavButton onClick={logout}>LOGOUT</NavButton>
      </ListItem>
    </List>
  );
};
