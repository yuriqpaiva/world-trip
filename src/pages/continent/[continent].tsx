import { Box, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
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
};

interface ContinentProps {
  continent: ContinentData;
}

export default function Continent({ continent }: ContinentProps) {
  console.log(continent);

  return (
    <>
      <ContinentBanner
        name={continent.name}
        bannerUrl={continent.banners.main}
      />
      <Box maxW={1440} mx="auto">
        <ContinentMainInformation
          info={continent.info}
          description={continent.description}
        />
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
