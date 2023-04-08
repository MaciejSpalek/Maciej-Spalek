import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_POSTS_QUERY } from "queries/postsQuery";
import { convertPosts } from "helpers";
import { PostTypes } from "types";

import { PostList } from "components";
import { BrushIcon } from "assets";

export const Photography = () => {
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  const { data, loading, error } = useQuery(GET_POSTS_QUERY, {
    variables: {
      type: PostTypes.photo,
    },
  });

  const posts = convertPosts(data?.posts?.data);

  return (
    <PostList
      title="Fotografia"
      icon={BrushIcon}
      onClick={openModal}
      loading={loading}
      list={posts}
      error={error}
    />
  );
};
