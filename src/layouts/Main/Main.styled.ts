import styled from "styled-components";
import { colors } from "theme/colors";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1268px;
  margin: 0 auto;
`;
