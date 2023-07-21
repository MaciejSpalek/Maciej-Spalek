import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_POSTS_QUERY } from "queries/postsQuery";
import { convertPosts } from "helpers";
import { PostTypes } from "types";

import { PostList, Sections } from "components";

export const Paintings = () => {
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  const { data, loading } = useQuery(GET_POSTS_QUERY, {
    variables: {
      type: PostTypes.painting,
    },
  });

  const posts = convertPosts(data?.posts?.data);

  return (
    <>
      <PostList
        title="Obrazy"
        onClick={openModal}
        loading={loading}
        list={posts}
      />
      <Sections hiddenSectionName="Obrazy" />
    </>
  );
};
