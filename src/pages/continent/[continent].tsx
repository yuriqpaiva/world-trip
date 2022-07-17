import { GetStaticPaths, GetStaticProps } from "next";

type ContinentData = {
  id: number;
  name: string;
  description: string;
  info: {
    countries: number;
    languages: number;
    cities: number;
  };
  slug: string;
};

interface ContinentProps {
  continent: ContinentData;
}

export default function Continent({ continent }: ContinentProps) {
  return <h1>Continent</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3333/continents");
  const data: ContinentData[] = await response.json();

  return {
    paths: data.map((continent) => {
      return {
        params: {
          continent: continent.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continent = params?.continent;

  const response = await fetch(
    `http://localhost:3333/continents/?slug=${continent}`
  );

  const data: ContinentData = await response.json();

  return {
    props: {
      continent: data,
    },
  };
};
