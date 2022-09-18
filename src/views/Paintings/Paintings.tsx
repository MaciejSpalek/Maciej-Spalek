import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_POSTS_QUERY } from "queries/postsQuery";

import { PostTypes } from "helpers/post";
import { convertPosts } from "helpers";

import { PostList } from "components";

export const Paintings = () => {
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
      type: PostTypes.painting,
    },
  });

  const posts = convertPosts(postsData?.posts?.data);

  return (
    <div>
      <PostList
        title="Obrazy"
        onClick={openModal}
        loading={postsLoading}
        list={posts}
        error={postsError}
      />
    </div>
  );
};
