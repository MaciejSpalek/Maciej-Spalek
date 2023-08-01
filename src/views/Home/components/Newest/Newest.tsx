import React, { useEffect, useState } from "react";
import { Wrapper } from "./Newest.styled";
import { GET_NEWEST_POSTS_QUERY } from "queries";
import { convertPosts } from "helpers";
import { useQuery } from "@apollo/client";
import { PostTypes } from "types";
import { Button, PostList, SpecialButton } from "components";
import { useRouter } from "next/router";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

export const Newest = () => {
  const [isSectionVisible, setVisibleState] = useState(false);
  const { visible, ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const router = useRouter();

  useEffect(() => {
    if (visible) {
      setVisibleState(true);
    }
    //eslint-disable-next-line
  }, [visible]);

  const { data, loading } = useQuery(GET_NEWEST_POSTS_QUERY, {
    variables: { type: PostTypes.painting },
    skip: !isSectionVisible,
  });

  const posts = convertPosts(data?.posts?.data);
  const handleOnClick = () => router.push("/paintings");

  return (
    <Wrapper ref={ref}>
      <PostList title="Obrazy" loading={loading} list={posts} />
      <SpecialButton onClick={handleOnClick}>Więcej</SpecialButton>
    </Wrapper>
  );
};
