import styled from "styled-components";
import { devices, flexColumn } from "theme";

export const List = styled.ul`
  ${flexColumn};
  gap: 5rem;
  list-style: none;
  padding: 16px 0;

  @media ${devices.md} {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }
`;
