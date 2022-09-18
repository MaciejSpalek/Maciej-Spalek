import { useRouter } from "../../../node_modules/next/router";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_QUERY } from "queries";
import { convertProject } from "helpers/conversion";
import { Container } from "./Project.styled";
import { PostList } from "components";

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

  const { title, posts } = convertProject(projectData);

  if (projectLoading) {
    return <div>...loading</div>;
  }

  if (projectError) {
    return <div>error</div>;
  }

  return (
    <Container>
      <PostList
        title={title}
        list={posts}
        loading={projectLoading}
        error={projectError}
        onClick={openModal}
      />
    </Container>
  );
};
