import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 100%;
  gap: 16px;
  list-style: none;
  padding: 8px 16px;
`;
