import React from "react";
import Link from "../../../../../node_modules/next/link";
import { ProjectCard } from "components";
import { Item, List, Title, Container } from "./Projects.styled";

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
    <Container>
      <Title>Projekty</Title>
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
    </Container>
  );
};
