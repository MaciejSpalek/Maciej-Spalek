import styled from "styled-components";
import { colors, flexColumn, flexRow } from "theme";

export const InputWrapper = styled.div`
  ${flexRow};
  align-items: flex-start;
  gap: 16px;
`;

export const Form = styled.form`
  ${flexColumn};
  gap: 32px;
`;

export const BottomWrapper = styled.div`
  ${flexRow};
  justify-content: flex-end;
`;
