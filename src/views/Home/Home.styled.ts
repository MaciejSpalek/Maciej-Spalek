import styled from "styled-components";
import { devices } from "theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;

  @media ${devices.sm} {
    padding: 16px;
  }
`;
