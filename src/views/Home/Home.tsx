import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { PostList, PostPreview } from "components";
import { Projects } from "./components";

import { GET_POST_QUERY, GET_POSTS_QUERY } from "queries/postsQuery";
import { GET_PROJECTS_QUERY } from "queries/projectQuery";
import { convertPosts, convertPreview } from "helpers";
import { convertProjects } from "helpers/conversion";
import { PostTypes } from "helpers/post";

export const Home = () => {
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
      type: PostTypes.painting,
    },
  });

  const {
    data: projectsData,
    loading: projectsLoading,
    error: projectsError,
  } = useQuery(GET_PROJECTS_QUERY);

  const { data: previewData } = useQuery(GET_POST_QUERY, {
    variables: {
      id: router.query.photo,
    },
  });

  const preview = convertPreview(previewData);
  const projects = convertProjects(projectsData?.projects?.data);
  const posts = convertPosts(postsData?.posts?.data);

  return (
    <div>
      <Projects
        list={projects}
        error={projectsError}
        loading={projectsLoading}
      />
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
