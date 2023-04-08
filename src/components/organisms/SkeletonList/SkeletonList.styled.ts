import styled, { keyframes } from "styled-components";
import { boxShadow, colors } from "theme";

const twinkle = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  list-style: none;
  gap: 40px;
  padding: 40px;
`;

export const Item = styled.li``;

export const Skeleton = styled.div`
  min-height: 500px;
  width: auto;
  border-radius: 8px;
  background-color: ${colors.background.light};
  animation: ${twinkle} 1s ease-out infinite;
  ${boxShadow};
`;
