import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 40px;
`;

export const Heading = styled.h2`
  font-family: Lexend;
  font-size: 36px;
  color: white;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 28px;
  list-style: none;
  padding: 0 40px;
  margin: 0;
`;

export const Item = styled.li`
  margin-bottom: 28px;
`;
