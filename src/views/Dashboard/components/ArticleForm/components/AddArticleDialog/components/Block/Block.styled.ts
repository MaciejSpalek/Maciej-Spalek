import styled from "styled-components";
import { flexColumn } from "theme";

export const Container = styled.div`
  ${flexColumn};
  align-items: flex-start;
`;

export const FieldsWrapper = styled.div`
  ${flexColumn};
  gap: 16px;
`;
