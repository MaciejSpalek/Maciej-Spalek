import styled from "styled-components";
import { colors, flexColumn } from "theme";

export const Form = styled.form`
  ${flexColumn};
  gap: 24px;
`;

export const SubmitWrapper = styled.div`
  ${flexColumn};
  align-items: flex-end;
  gap: 16px;
  border-radius: 40px;
  background-color: ${colors.black};
`;

export const FieldsWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 16px;
  width: 100%;
`;
