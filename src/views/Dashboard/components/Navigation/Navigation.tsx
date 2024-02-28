import React from "react";
import { navigation } from "./helpers";
import { List, ListItem, Button } from "./Navigation.styled";

export const Navigation = ({ step, setStep }) => {
  return (
    <List>
      {navigation.map((element) => (
        <ListItem key={element}>
          <Button isActive={step === element} onClick={() => setStep(element)}>
            {element.toUpperCase()}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
