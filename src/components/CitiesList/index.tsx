import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CityItem } from "./CityItem";

interface CitiesListProps {
  cities: {
    city: string;
    country: string;
    flagImg: string;
    cityImg: string;
  }[];
}

export function CitiesList({ cities }: CitiesListProps) {
  return (
    <Flex mx="auto" flexDir="column" maxWidth={{ base: 600, lg: "100%" }}>
      <Text
        color="gray.400"
        fontSize={{ base: "2xl", lg: "4xl" }}
        fontWeight="medium"
        mb="10"
      >
        Cidades +100
      </Text>
      <SimpleGrid
        mb="8"
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing="12"
        mx={{ base: "auto", sm: "none", md: "none", lg: "none" }}
      >
        {cities.map((city) => (
          <CityItem
            key={city.city}
            country={city.country}
            city={city.city}
            cityImg={city.cityImg}
            flagImg={city.flagImg}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
