import React from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Container } from "./Home.styled";

import { PostList } from "components";
import { Projects } from "./components";

import { GET_POSTS_QUERY } from "queries/postsQuery";
import { GET_PROJECTS_QUERY } from "queries/projectQuery";

import { convertPosts } from "helpers";
import { convertProjects } from "helpers/conversion";
import { PostTypes } from "helpers/post";

import { Slider } from "./components/Slider/Slider";

export const Home = () => {
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

  const {
    data: projectsData,
    loading: projectsLoading,
    error: projectsError,
  } = useQuery(GET_PROJECTS_QUERY);

  const projects = convertProjects(projectsData?.projects?.data);
  const posts = convertPosts(postsData?.posts?.data);

  return (
    <Container>
      {/* <Slider /> */}
      <Projects
        list={projects}
        error={projectsError}
        loading={projectsLoading}
      />
      <PostList
        title="Obrazy"
        onClick={openModal}
        loading={postsLoading}
        list={posts}
        error={postsError}
      />
    </Container>
  );
};
