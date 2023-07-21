import styled from "styled-components";
import { devices, flexCenter } from "theme";

export const Wrapper = styled.div`
  ${flexCenter};
`;

export const List = styled.ul`
  display: grid;
  width: 100%;
  list-style: none;
  grid-template-columns: 1fr;
  padding: 0;
  gap: 1rem;

  @media ${devices.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ListItem = styled.li``;
