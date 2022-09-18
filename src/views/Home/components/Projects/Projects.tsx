import React from "react";
import Link from "../../../../../node_modules/next/link";
import {
  Item,
  List,
  HeadingWrapper,
  Container,
  Heading,
} from "./Projects.styled";
import { ProjectCard } from "components";
import { Section } from "layouts/Section";

interface IProps {
  loading: boolean;
  error: string;
  list: any[];
}

export const Projects = ({ loading, error, list }: IProps) => {
  if (loading) {
    return <span>...loading </span>;
  }

  if (error) {
    return <span>error</span>;
  }

  return (
    <Section title="Projekty">
      <List>
        {list.map((data) => (
          <Item key={data.id}>
            <Link href={`/projects/${data.id}`} passHref>
              <a>
                <ProjectCard data={data} />
              </a>
            </Link>
          </Item>
        ))}
      </List>
    </Section>
  );
};
