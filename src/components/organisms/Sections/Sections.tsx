import { useQuery } from "@apollo/client";
import { GET_SECTIONS_QUERY } from "queries";
import { convertSections } from "helpers";

import { LoadingWrapper } from "components";
import { Section } from "./components";

import { Container, List, Heading } from "./Sections.styled";

interface ISections {
  hiddenSectionName?: string;
}

export const Sections = ({ hiddenSectionName }: ISections) => {
  const { data, loading } = useQuery(GET_SECTIONS_QUERY);
  const sections = convertSections(data?.sections?.data);

  const filteredSections = sections?.filter(
    ({ title }) => title !== hiddenSectionName
  );

  if (loading && null == sections) {
    return <LoadingWrapper />;
  }

  return (
    <Container>
      <Heading>Zobacz także</Heading>
      <List>
        {filteredSections?.map(({ id, href, title, image }) => (
          <li key={id}>
            <Section href={href} title={title} image={image} />
          </li>
        ))}
      </List>
    </Container>
  );
};
