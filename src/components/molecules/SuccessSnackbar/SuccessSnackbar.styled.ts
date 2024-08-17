import styled from "styled-components";
import { SnackbarContent } from "notistack";
import { colors, getFont } from "theme";
import { CheckmarkIcon } from "assets";

export const StyledSnackbarContent = styled(SnackbarContent)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  min-width: 300px;
  border-radius: 8px;
  padding: 16px 20px;
  background-color: ${colors.grayScale[1]};
  border: 1px solid ${colors.grayScale[2]};
`;

export const StyledCheckmarkIcon = styled(CheckmarkIcon)`
  width: 14px;
  height: 14px;
  path {
    fill: ${colors.white};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.label.green.medium};
`;

export const Paragraph = styled.p`
  ${getFont("regular", 12, 16)};
  letter-spacing: 2.2px;
  line-height: 16px;
  margin: 0;
  color: ${colors.white};
  word-break: break-all;
  overflow-wrap: break-word;
`;
