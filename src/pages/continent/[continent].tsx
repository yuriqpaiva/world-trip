import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { CitiesList } from "../../components/CitiesList";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentMainInformation } from "../../components/ContinentMainInformation";

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
  banners: {
    main: string;
  };
  cities: {
    city: string;
    country: string;
    flagImg: string;
    cityImg: string;
  }[];
};

interface ContinentProps {
  continent: ContinentData;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <ContinentBanner
        name={continent.name}
        bannerUrl={continent.banners.main}
      />
      <Box maxW={1160} mx="auto">
        <ContinentMainInformation
          info={continent.info}
          description={continent.description}
        />
        <CitiesList cities={continent.cities} />
      </Box>
    </>
  );
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

  const data: ContinentData[] = await response.json();

  return {
    props: {
      continent: data[0],
    },
  };
};
