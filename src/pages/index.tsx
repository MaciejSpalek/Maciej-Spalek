import { Home } from "views";

export default Home;


export async function getServerSideProps() {
  try {
      const response = await fetch('http://localhost:5000/api/home/get')

      if (!response.ok) {
        console.error(`Nieudane zapytanie. Status: ${response.status}`);
        return {
          notFound: true,
        };
      }
  
      const data = await response.json();
  
      return {
        props: {
          data: data[0].home
        },
      };
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
      return {
        props: {
          data: null,
        },
      };
    }
}
