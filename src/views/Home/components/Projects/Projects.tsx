import React from "react";
import Link from "../../../../../node_modules/next/link";
import { Item, List } from "./Projects.styled";
import { ProjectCard } from "components";
import { Section } from "layouts/Section";
import { ProjectsIcon } from "assets";
import { ProjectsProps } from "./Projects.model";

export const Projects = ({ loading, error, list }: ProjectsProps) => {
  return (
    <Section
      title="Projekty"
      isLoading={loading}
      icon={ProjectsIcon}
      isError={error}
    >
      <List>
        {list?.map(({ image, id, title, date }) => (
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
