import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 40px;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 16px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 28px;
`;

export const Title = styled.span`
  font-size: 28px;
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 300px;
`;
