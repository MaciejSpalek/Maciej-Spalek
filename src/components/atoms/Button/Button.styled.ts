import styled from "styled-components";
import { getButtonSize, getHover, getStyles } from "./helpers";
import { LogoIcon } from "assets";
import { IBaseButton } from "./Button.model";
import { flexCenter, colors, fullRotateAnimation } from "theme";

export const BaseButton = styled.button<IBaseButton>`
  ${flexCenter};
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  font-size: 16px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  min-height: 50px;
  border-radius: 8px;
  ${({ size }) => getButtonSize(size)};
  ${({ outline, disabled }) => getStyles(outline, disabled)};
  width: ${({ fullWidth }) => fullWidth && "100%"};
  :hover {
    ${({ outline, disabled }) => getHover(outline, disabled)};
  }
`;

export const StyledIconWrapper = styled.div<{
  disabled: boolean;
  isLoading: boolean;
}>`
  position: ${({ isLoading }) => (isLoading ? "absolute" : "static")};
  ${flexCenter};
  width: auto;
  margin-right: 8px;
  svg path {
    transition: 0.3s ease-in-out;
    width: 16px;
    height: 16px;
    fill: ${({ disabled }) => disabled && colors.grayscale.secondary};
  }
`;

export const StyledContent = styled.div`
  ${flexCenter};
`;

export const Wrapper = styled.div<{ isLoading: boolean }>`
  ${flexCenter};
  opacity: ${({ isLoading }) => isLoading && 0};
`;

export const StyledLoader = styled(LogoIcon)`
  ${flexCenter};
  animation: ${fullRotateAnimation} 2s infinite linear;
  width: 24px;
  height: 24px;
  path {
    color: ${colors.grayscale.secondary};
  }
`;
