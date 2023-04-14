import React from "react";
import Link from "../../../../../node_modules/next/link";
import { Item, List } from "./Projects.styled";
import { ProjectCard } from "components";
import { Section } from "layouts/Section";
import { ProjectsProps } from "./Projects.model";
import { GET_PROJECTS_QUERY } from "queries";
import { convertProjects } from "helpers";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

export const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS_QUERY);

  const projects = convertProjects(data);

  return (
    <Section title="Jak powstaje obraz?" isLoading={loading}>
      <List>
        {projects?.map(({ image, id, title, date }) => (
          <Item key={id}>
            <Link href={`/projects/${id}`} passHref>
              <a>
                <ProjectCard date={date} image={image} title={title} />
              </a>
            </Link>
          </Item>
        ))}
      </List>
    </Section>
  );
};
