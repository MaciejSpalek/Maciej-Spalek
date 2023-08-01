import React from "react";
import { Paintings } from "views";
import { apolloClient } from "services";
import { GET_POSTS_QUERY } from "queries";
import { PostTypes } from "types";
import { convertPosts } from "helpers";

export default Paintings;

export async function getServerSideProps() {
  const { data, loading } = await apolloClient.query({
    query: GET_POSTS_QUERY,
    variables: {
      type: PostTypes.painting,
    },
  });

  const posts = convertPosts(data?.posts?.data);
  
  return {
    props: {
      posts,
      loading,
    },
  };
}
