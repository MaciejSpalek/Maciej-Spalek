import { Home } from "views";

export default Home;

export async function getServerSideProps() {
  try {
    const homeResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/get`);
    const craftsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/craft/get-all`
    );

    if (!homeResponse.ok) {
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
    return {
      props: {
        data: null,
      },
    };
  }
}
