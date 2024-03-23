import styled from "styled-components";
import { breakpoints, flexCenter, flexColumn, flexRow, getFont } from "theme";
import { colors } from "theme/colors";

export const Backdrop = styled.div<{ isOpen: boolean }>`
  ${flexCenter};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 24px;
  background-color: ${colors.transparent.white.medium};
`;

export const StyledDialog = styled.div<{ size: number }>`
  ${flexColumn};
  gap: 16px;
  max-width: ${({ size }) => `${size}px`};
  padding: 24px;
  border-radius: 40px;
  background-color: ${colors.black};
`;

export const TopWrapper = styled.div`
  ${flexRow};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Divider = styled.hr`
  width: 100%;
  border-color: ${colors.grayScale[1]};
`;

export const DialogContent = styled.div`
  ${flexCenter}
`;

export const Title = styled.h1`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  line-height: 32px;
  color: ${colors.grayScale[4]};
  margin: 0;
  text-transform: uppercase;
`;
