import styled from "styled-components";
import { flexRow } from "theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1268px;
  width: 100%;
  gap: 2rem;
`;
