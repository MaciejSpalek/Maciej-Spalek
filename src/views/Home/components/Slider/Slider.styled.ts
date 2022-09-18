import ReactCarousel from "react-alice-carousel";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
  max-height: 600px;
  object-fit: cover;
  pointer-events: none;
`;

export const Carousel = styled(ReactCarousel)``;
