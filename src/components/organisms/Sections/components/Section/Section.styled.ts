import styled from "styled-components";
import { colors, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  height: 100%;
`;

export const Title = styled.p`
  position: relative;
  line-height: 100%;
  color: ${colors.grayScale[6]};
  text-transform: uppercase;
  margin: 0;
  transition: 0.5s ease;
  ${getFont("medium", 24, 94)};

  &:hover,
  &:focus {
    transform: translateX(-16px);
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
    transform: translate(0px, -50%);
  }

  :before {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(100% + 16px);
    height: 80%;
    aspect-ratio: 1 / 1;
    transform: translate(-100px, -50%);
    background-color: ${colors.primary.main};
    border-radius: 50px;
    z-index: 1;
    transition: 0.5s ease;
    opacity: 0;
  }
`;
