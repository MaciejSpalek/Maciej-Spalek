import styled from "styled-components";
import { devices, flexCenter, flexColumn } from "theme";

export const Wrapper = styled.div`
  ${flexCenter};
`;

export const Container = styled.div`
  ${flexColumn};
  gap: 2rem;
`;

export const Heading = styled.h2`
  font-family: Lexend;
  font-size: 36px;
  color: white;
`;

export const List = styled.ul`
  display: grid;
  width: 100%;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media ${devices.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ListItem = styled.li`
  position: relative;
  aspect-ratio: 4/5;
`;
