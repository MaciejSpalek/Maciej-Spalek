import React, { useEffect, useState } from "react";
import Link from "../../../../../node_modules/next/link";
import { ListItem, List, Wrapper } from "./Projects.styled";
import { ProjectCard } from "components";
import { Section } from "layouts/Section";
import { GET_PROJECTS_QUERY } from "queries";
import { convertProjects } from "helpers";
import { useQuery } from "@apollo/client";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

export const Projects = () => {
  const [isSectionVisible, setVisibleState] = useState(false);
  const { visible, ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  useEffect(() => {
    if (visible) {
      setVisibleState(true);
    }
    //eslint-disable-next-line
  }, [visible]);

  const { data, loading } = useQuery(GET_PROJECTS_QUERY, {
    skip: !isSectionVisible,
  });

  const projects = convertProjects(data);

  return (
    <Wrapper ref={ref}>
      <Section title="Etapy powstawania obrazu" isLoading={loading}>
        <List>
          {projects?.map(({ image, id, title, date, description }) => (
            <ListItem key={id}>
              <Link href={`/projects/${id}`} passHref>
                <a>
                  <ProjectCard
                    date={date}
                    image={image}
                    title={title}
                    description={description}
                  />
                </a>
              </Link>
            </ListItem>
          ))}
        </List>
      </Section>
    </Wrapper>
  );
};
