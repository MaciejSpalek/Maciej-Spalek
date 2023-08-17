import styled from "styled-components";
import { colors, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  width: 100%;
  height: 100%;
`;

export const Title = styled.p<{ isOddNumber: boolean }>`
  position: relative;
  line-height: 100%;
  color: ${colors.grayScale[6]};
  text-transform: uppercase;
  margin: 0;
  ${getFont("medium", 94)};
  transition: 0.5s ease;
  
  
  :hover {
    transform: ${({ isOddNumber }) =>
      isOddNumber ? "translate(30px, 5px)" : "translate(-30px, 5px)"};
  }

  :hover:before {
    opacity: 1;
    width: 30%;
  }

  :before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0%;
    height: 50%;
    transform: translate(0%, -50%);
    background-color: ${colors.primary.main};
    border-radius: 50px;
    z-index: 1;
    transition: 0.5s ease;
    opacity: 0;
  }
`;
