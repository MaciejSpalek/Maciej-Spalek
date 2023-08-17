import { apolloClient } from "services";
import { GET_CRAFT_QUERY, GET_SECTIONS_QUERY } from "queries";
import { convertCraft, convertSections } from "helpers";
import { Craft } from "components";

const Drawings = ({ data }) => <Craft {...data} />;

export default Drawings;

export async function getServerSideProps() {
  const { data: craft } = await apolloClient.query({
    query: GET_CRAFT_QUERY,
    variables: {
      id: 3,
    },
  });

  const { data: sections } = await apolloClient.query({
    query: GET_SECTIONS_QUERY,
  });

  const convertedSections = convertSections(sections.sections.data);
  const convertedCraft = convertCraft(craft.craft.data);

  return {
    props: {
      data: { craft: convertedCraft, sections: convertedSections },
    },
  };
}
