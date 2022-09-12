import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_POST_QUERY, GET_POSTS_QUERY } from "queries/postsQuery";

import { convertPosts, convertPreview } from "helpers";
import { PostTypes } from "helpers/post";
import { PostPreview, PostList } from "components";

export const Drawings = () => {
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  const closePreview = () => {
    router.query = {};
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

  const { data: previewData } = useQuery(GET_POST_QUERY, {
    variables: {
      id: router.query.photo,
    },
  });

  const preview = convertPreview(previewData);
  const posts = convertPosts(postsData?.posts?.data);

  return (
    <div>
      <PostList
        onClick={openModal}
        loading={postsLoading}
        list={posts}
        error={postsError}
      />
      <PostPreview data={preview} close={closePreview} />
    </div>
  );
};
