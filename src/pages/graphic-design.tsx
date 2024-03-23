import React from "react";
import { Craft } from "components";

const GraphicDesign = ({ data }) => <Craft {...data} />;

export default GraphicDesign;

export async function getServerSideProps() {
  try {
    const craftResponse = await fetch(
      "http://localhost:5000/api/craft/get/graphic-design"
    );

    if (!craftResponse.ok) {
      console.error(`Nieudane zapytanie. Status: ${craftResponse.status}`);
      return {
        notFound: true,
      };
    }

    const craftData = await craftResponse.json();

    return {
      props: {
        data: { sections: [], craft: craftData },
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
