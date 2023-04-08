import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_POSTS_QUERY } from "queries/postsQuery";

import { convertPosts } from "helpers";

import { RulerAndPenIcon } from "assets";
import { PostList } from "components";
import { PostTypes } from "types";

export const Drawings = () => {
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  const { data, loading, error } = useQuery(GET_POSTS_QUERY, {
    variables: {
      type: PostTypes.drawing,
    },
  });

  const posts = convertPosts(data?.posts?.data);

  return (
    <PostList
      title="Rysunki"
      icon={RulerAndPenIcon}
      onClick={openModal}
      loading={loading}
      list={posts}
      error={error}
    />
  );
};
