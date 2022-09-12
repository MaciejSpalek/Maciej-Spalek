import { FacebookIcon, InstagramIcon, LinkedInIcon } from "assets";
import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px;
`;

export const Copyright = styled.span`
  font-size: 18px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  list-style: none;
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
`;

export const Logo = styled.span`
  font-size: 18px;
`;
export const Anchor = styled.a`
  svg {
    width: 24px;
    height: 24px;
  }
`;

// export const StyledFaceBookIcon = styled(FacebookIcon)`
//   width: 24px;
//   height: 24px;
// `;

// export const StyledInstagramIcon = styled(InstagramIcon)`
//   width: 24px;
//   height: 24px;
// `;

// export const StyledLinkedInIcon = styled(LinkedInIcon)`
//   width: 24px;
//   height: 24px;
// `;
