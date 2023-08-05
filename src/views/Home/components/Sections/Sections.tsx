import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SECTIONS_QUERY } from "queries";
import { convertSections } from "helpers";

import { SkeletonList } from "components";
import { Section } from "./components";

import { Container, List, Heading } from "./Sections.styled";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

interface ISections {
  hiddenSectionName?: string;
}

export const Sections = ({ hiddenSectionName }: ISections) => {
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

  const { data, loading } = useQuery(GET_SECTIONS_QUERY, {
    skip: !isSectionVisible,
  });
  const sections = convertSections(data?.sections?.data);
  const filteredSections = sections?.filter(
    ({ title }) => title !== hiddenSectionName
  );

  return (
    <Container ref={ref}>
      <Heading>what i’m doing</Heading>
      {loading && null == sections ? (
        <SkeletonList elementsNumber={3} minHeight={320} />
      ) : (
        <List>
          {filteredSections?.map(({ id, href, title, image }) => (
            <li key={id}>
              <Section href={href} title={title} image={image} />
            </li>
          ))}
        </List>
      )}
    </Container>
  );
};
