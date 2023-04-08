import { useQuery } from "@apollo/client";
import { Container } from "./Sections.styled";
import { GET_SECTIONS_QUERY } from "queries";
import { LoadingWrapper } from "components";
import { convertSections } from "helpers";
import { Section } from "./components";

export const Sections = () => {
  const { data, loading } = useQuery(GET_SECTIONS_QUERY);
  const sections = convertSections(data?.sections?.data);

  if (loading && null == sections) {
    return <LoadingWrapper />;
  }

  return (
    <Container>
      {sections.map(({ id, href, title, image }) => (
        <Section key={id} href={href} title={title} image={image} />
      ))}
    </Container>
  );
};
