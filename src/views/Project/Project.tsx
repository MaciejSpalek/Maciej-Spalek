import { useRouter } from "../../../node_modules/next/router";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_QUERY } from "queries";
import { convertProject } from "helpers/conversion";
import { PostList } from "components";
import { ProjectsIcon } from "assets";

export const Project = () => {
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  const { data, loading, error } = useQuery(GET_PROJECT_QUERY, {
    variables: { id: router.query.id },
  });

  const { title, posts } = convertProject(data);

  return (
    <PostList
      icon={ProjectsIcon}
      title={title}
      list={posts}
      loading={loading}
      error={error}
      onClick={openModal}
    />
  );
};
