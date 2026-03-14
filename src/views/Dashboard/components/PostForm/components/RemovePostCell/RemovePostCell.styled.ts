import styled from "styled-components";
import { colors, flexCenter, flexColumn, getFont } from "theme";

export const DialogContent = styled.div`
  ${flexColumn};
  gap: 16px;
`;
export const ButtonWrapper = styled.div`
  ${flexCenter};
  gap: 16px;
`;

export const Form = styled.form`
  ${flexColumn};
  gap: 32px;
`;

export const Description = styled.p`
  ${getFont("medium", 12, 18)};
  color: ${colors.white};
`;
