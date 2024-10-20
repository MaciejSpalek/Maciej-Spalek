import styled from "styled-components";
import { devices, flexCenter, colors } from "theme";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  list-style: none;
  padding: 0;
  gap: 8px;
  margin: 8px;

  @media ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
    margin: 16px;
    gap: 48px 16px;
  }

  @media ${devices.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Button = styled.button`
  ${flexCenter};
  background-color: ${colors.transparent.main};
  border: none;
  padding: 0;
  margin: 0;
`;

export const MainImageContainer = styled.div`
  position: relative;
  ${flexCenter};
  border-radius: 28px;
  overflow: hidden;
  aspect-ratio: 4 / 5;

  @media ${devices.md} {
    aspect-ratio: 16 / 9;
  }
`;
