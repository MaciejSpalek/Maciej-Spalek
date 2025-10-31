import { ErrorIcon } from "assets";
import { SnackbarContent } from "notistack";
import styled from "styled-components";
import { colors, getFont } from "theme";

export const StyledSnackbarContent = styled(SnackbarContent)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  min-width: 280px;
  border-radius: 8px;
  padding: 16px 20px;
  background-color: ${colors.grayScale[1]};
  border: 1px solid ${colors.grayScale[2]};
`;

export const StyledErrorIcon = styled(ErrorIcon)`
  width: 24px;
  height: 24px;
  path {
    fill: ${colors.label.red.medium};
  }
`;

export const Paragraph = styled.p`
  ${getFont("regular", 12, 18)};
  letter-spacing: 2.2px;
  line-height: 16px;
  margin: 0;
  color: ${colors.white};
  word-break: break-all;
  overflow-wrap: break-word;
`;
