import React, { ReactNode, useRef } from "react";
import { Button } from "components/atoms";
import { CloseIcon } from "assets";
import {
  DialogContent,
  StyledDialog,
  Backdrop,
  TopWrapper,
  Divider,
  Title,
} from "./Dialog.styled";
import { breakpointTypes } from "types";
import { breakpoints } from "theme";

interface IDialog {
  size: breakpointTypes;
  children: ReactNode;
  toggle: () => void;
  isOpen: boolean;
  title: string;
}

export const Dialog = ({ children, title, isOpen, toggle, size }: IDialog) => {
  const ref = useRef();

  const dialogSize = breakpoints[size];

  return (
    <Backdrop isOpen={isOpen}>
      <StyledDialog size={dialogSize} ref={ref}>
        <TopWrapper>
          <Title>{title}</Title>
          <Button  size="square" onClick={toggle} icon={CloseIcon}></Button>
        </TopWrapper>
        <Divider />
        <DialogContent>{children}</DialogContent>
      </StyledDialog>
    </Backdrop>
  );
};
