import { useRouter } from "../../../node_modules/next/router";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_QUERY } from "queries";
import { convertProject } from "helpers/conversion";
import { PostList } from "components";

export const Project = () => {
  const router = useRouter();

  const openModal = (id) => {
    router.query.photo = id;
    router.push(router);
  };

  const { data, loading } = useQuery(GET_PROJECT_QUERY, {
    variables: { id: router.query.id },
  });

  const { title, posts } = convertProject(data);

  return (
    <PostList
      title={title}
      list={posts}
      loading={loading}
      onClick={openModal}
    />
  );
};
