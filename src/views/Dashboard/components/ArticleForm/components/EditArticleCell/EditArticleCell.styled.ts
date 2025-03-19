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

export const BlockWrapper = styled.div`
  ${flexColumn};
  gap: 16px;
`;

export const FieldsWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 16px;
  width: 100%;
`;

export const SubmitWrapper = styled.div`
  ${flexColumn};
  align-items: flex-end;
`;
