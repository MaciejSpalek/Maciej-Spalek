import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.svg`
  animation: ${rotate} 1s cubic-bezier(0.36, 0.8, 0.7, 0.21) infinite;
`;
