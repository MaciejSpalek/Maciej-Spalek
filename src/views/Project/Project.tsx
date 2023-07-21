import { useRouter } from "../../../node_modules/next/router";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_QUERY } from "queries";
import { convertProject } from "helpers/conversion";
import { ProjectList } from "./components";

export const Project = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_PROJECT_QUERY, {
    variables: { id: router.query.id },
  });

  const { title, posts } = convertProject(data);

  return (
    <ProjectList title={title} list={posts} loading={loading} error={error} />
  );
};
