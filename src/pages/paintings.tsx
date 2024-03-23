import React from "react";
import { Craft } from "components";
import { PostTypes } from "types";

const Paintings = ({ data }) => <Craft {...data} />;

export default Paintings;

export async function getServerSideProps() {
  try {
    const craftResponse = await fetch(
      "http://localhost:5000/api/craft/get/paintings"
    );
    const sectionsResponse = await fetch(
      "http://localhost:5000/api/craft/get-all"
    );
    const postsResponse = await fetch(
      `http://localhost:5000/api/post/list?type=${PostTypes.painting}`
    );

    if (!craftResponse.ok) {
      console.error(`Nieudane zapytanie. Status: ${craftResponse.status}`);
      return {
        notFound: true,
      };
    }

    const sections = await sectionsResponse.json();
    const craft = await craftResponse.json();
    const posts = await postsResponse.json();

    return {
      props: {
        data: { sections, craft, posts },
      },
    };
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);

    return {
      props: {
        data: { craft: {}, sections: [] },
      },
    };
  }
}
