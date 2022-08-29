import styled from "styled-components";
import { colors } from "theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${colors.grayscale[900]};
`;
