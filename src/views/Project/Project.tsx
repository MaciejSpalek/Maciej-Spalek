import Masonry from "react-masonry-css";
import { useRouter } from "../../../node_modules/next/router";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_QUERY } from "queries";
import { convertPreview, convertProject } from "helpers/conversion";
import { Container } from "./Project.styled";
import { PostPreview, PostList } from "components";
import { GET_POST_QUERY } from "queries/postsQuery";

export const Project = () => {
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  const {
    data: projectData,
    loading: projectLoading,
    error: projectError,
  } = useQuery(GET_PROJECT_QUERY, {
    variables: { id: router.query.id },
  });

  const { data: previewData } = useQuery(GET_POST_QUERY, {
    variables: {
      id: router.query.photo,
    },
  });

  const closePreview = () => {
    router.query = { id: router.query.id };
    router.push(router);
  };

  const preview = convertPreview(previewData);
  const { posts } = convertProject(projectData);

  if (projectLoading) {
    return <div>...loading</div>;
  }

  if (projectError) {
    return <div>error</div>;
  }

  return (
    <Container>
      <PostList
        list={posts}
        loading={projectLoading}
        error={projectError}
        onClick={openModal}
      />
      <PostPreview data={preview} close={closePreview} />
    </Container>
  );
};
