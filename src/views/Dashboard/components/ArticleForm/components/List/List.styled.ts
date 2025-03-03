import styled from "styled-components";
import { colors, flexColumn, flexRow, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  gap: 16px;
`;

export const TopWrapper = styled.div`
  ${flexRow};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Heading = styled.p`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  line-height: 32px;
  color: ${colors.grayScale[4]};
  margin: 0;
  text-transform: uppercase;
`;

export const Section = styled.div`
  ${flexColumn};
  align-items: flex-end;
  border-radius: 40px;
  padding: 24px;
  background-color: ${colors.black};
`;

export const Row = styled.li<{ last: boolean }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 16px 0;
  border-bottom: ${({ last }) => (last ? "none" : "1px solid")};
  border-color: ${colors.grayScale[2]};
`;

export const Cell = styled.p`
  color: ${colors.typography.secondary};
  font-size: 12px;
  font-weight: 500;
  white-space: pre-wrap;
  min-width: 120px;
`;

export const ImageWrapper = styled.div`
  min-width: 60px;
  min-height: 60px;
`;

export const HeaderCell = styled.p`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
`;

export const ContentList = styled.ul`
  ${flexColumn};
  gap: 16px;
  padding: 0;
  border-bottom: 1px solid ${colors.grayScale[2]};
  overflow-x: auto;
`;

export const HeaderList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 0;
  border-bottom: 1px solid ${colors.grayScale[2]};
  overflow-x: auto;
  list-style: none;
`;

export const ActionCell = styled.div`
  ${flexRow};
  min-width: 120px;
  gap: 16px;
  padding: 0;
`;

export const HeaderItem = styled.li`
  min-width: 120px;
`;
