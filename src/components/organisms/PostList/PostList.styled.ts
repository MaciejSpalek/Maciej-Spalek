import styled from "styled-components";
import { devices, flexCenter } from "theme";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  list-style: none;
  padding: 0;
  gap: 8px;

  @media ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media ${devices.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const MainImageContainer = styled.div`
  ${flexCenter};
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  aspect-ratio: 1/1;

  @media ${devices.md} {
    aspect-ratio: 16 / 9;
  }
`;
