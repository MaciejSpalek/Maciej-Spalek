import React from "react";
import { Craft } from "components";
import { PostTypes } from "types";

const Photography = ({ data }) => <Craft {...data} />;

export default Photography;

export async function getServerSideProps() {
  try {
    const craftResponse = await fetch(
      `http://localhost:5000/api/craft/get/${PostTypes.photography}`
    );
    
    const sectionsResponse = await fetch(
      "http://localhost:5000/api/craft/get-all"
    );

    const postsResponse = await fetch(
      `http://localhost:5000/api/post/list?type=${PostTypes.photography}&limit=10`
    );

    const postsAmountResponse = await fetch(
      `http://localhost:5000/api/post/amount?type=${PostTypes.photography}`
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
