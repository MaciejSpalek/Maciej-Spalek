import styled from "styled-components";
import { flexColumn } from "theme";
import { colors } from "theme/colors";

export const Container = styled.div`
  ${flexColumn};
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
`;

export const InnerWrapper = styled.div`
  ${flexColumn};
  max-width: 1268px;
`;

export const MainWrapper = styled.main`
  ${flexColumn};
`;
