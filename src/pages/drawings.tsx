import { Craft } from "components";
import { PostTypes } from "types";

const Drawings = ({ data }) => <Craft {...data} />;

export default Drawings;

export async function getServerSideProps() {
  try {
    const craftResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/craft/get/${PostTypes.drawing}`
    );

    const sectionsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/craft/get-all`
    );

    const postsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post/list?type=${PostTypes.drawing}&limit=10`
    );

    const postsAmountResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post/amount?type=${PostTypes.drawing}`
    );

    if (!craftResponse.ok) {
      console.error(`Nieudane zapytanie. Status: ${craftResponse.status}`);
      return {
        notFound: true,
      };
    }

    const postsAmount = await postsAmountResponse.json();
    const sections = await sectionsResponse.json();
    const craft = await craftResponse.json();
    const posts = await postsResponse.json();

    return {
      props: {
        data: { sections, craft, posts, postsAmount },
      },
    };
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);

    return {
      props: {
        data: { craft: {}, sections: [], posts: [] },
      },
    };
  }
}
