import { Home } from "views";
import { apolloClient } from "services";
import { GET_SECTIONS_QUERY } from "queries";
import { convertSections } from "helpers";

export default Home;

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: GET_SECTIONS_QUERY,
  });

  const sections = convertSections(data?.sections?.data);
  
  return {
    props: {
      sections,
    },
  };
}
