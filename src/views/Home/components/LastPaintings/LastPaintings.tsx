import React from "react";
import {Container, Heading, HeadingWrapper} from "./LastPaintings.styled";
import { PostList , Button} from "components";
import { IPost} from "types";
import {URLS} from 'helpers'
import {useRouter} from "next/router";

interface ILastPaintingsProps {
  posts: IPost[];
}

export const LastPaintings = ({ posts }: ILastPaintingsProps) => {
  const limitedPosts = posts.slice(0, 3);
    const router = useRouter();

    const goToPaintings = () => {
      router.push(URLS.paintings);
  }
  return (
    <Container>
        <HeadingWrapper>
        <Heading>Last paintings</Heading>
            <Button outline onClick={goToPaintings}>MORE</Button>
        </HeadingWrapper>
      <PostList
        postsAmount={6}
        initialList={limitedPosts}
        type="painting"
        hideDescription
      />
    </Container>
  );
};
