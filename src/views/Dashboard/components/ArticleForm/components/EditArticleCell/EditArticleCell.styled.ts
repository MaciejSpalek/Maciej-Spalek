import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "theme";

export const InputWrapper = styled.div`
  ${flexCenter};
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
