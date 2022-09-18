import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Slide, Image, Container } from "./Slider.styled";
import { useQuery } from "@apollo/client";
import { convertPosts, PostTypes } from "helpers";
import { GET_POSTS_QUERY } from "queries";
export const Slider = () => {
  const {
    data: postsData,
    loading: postsLoading,
    error: postsError,
  } = useQuery(GET_POSTS_QUERY, {
    variables: {
      type: PostTypes.painting,
    },
  });

  const posts = convertPosts(postsData?.posts?.data);

  return (
    <Container>
      <Carousel
        disableButtonsControls
        mouseTracking
        keyboardNavigation
        infinite
        items={posts?.map(({ image }) => (
          <Slide key={image}>
            <Image src={image} />
          </Slide>
        ))}
        autoPlay
        autoHeight
        autoPlayInterval={5000}
      ></Carousel>
    </Container>
  );
};
