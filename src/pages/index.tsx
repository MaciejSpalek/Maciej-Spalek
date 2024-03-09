import { Home } from "views";

export default Home;

export async function getServerSideProps() {
  try {
    const homeResponse = await fetch("http://localhost:5000/api/home/get");
    const craftsResponse = await fetch(
      "http://localhost:5000/api/craft/get-all"
    );

    if (!homeResponse.ok) {
      console.error(`Nieudane zapytanie. Status: ${homeResponse.status}`);
      return {
        notFound: true,
      };
    }

    const homeData = await homeResponse.json();
    const craftsData = await craftsResponse.json();

    return {
      props: {
        data: { home: homeData[0].home, crafts: craftsData },
      },
    };
  } catch (error) {
    console.error("Błąd podczas pobierania danych:", error);

    return {
      props: {
        data: null,
      },
    };
  }
}
