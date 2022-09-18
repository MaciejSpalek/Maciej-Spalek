import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_POSTS_QUERY } from "queries/postsQuery";

import { convertPosts } from "helpers";
import { PostTypes } from "helpers/post";
import { PostList } from "components";

export const Drawings = () => {
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  const {
    data: postsData,
    loading: postsLoading,
    error: postsError,
  } = useQuery(GET_POSTS_QUERY, {
    variables: {
      type: PostTypes.drawing,
    },
  });

  const posts = convertPosts(postsData?.posts?.data);

  return (
    <PostList
      title="Rysunki"
      onClick={openModal}
      loading={postsLoading}
      list={posts}
      error={postsError}
    />
  );
};
