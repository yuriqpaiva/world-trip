import { Box, SimpleGrid, Text } from "@chakra-ui/react";
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
    <Box>
      <Text color="gray.400" fontSize="4xl" fontWeight="medium" mb="10">
        Cidades +100
      </Text>
      <SimpleGrid mb="8" columns={4} spacing="12">
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
    </Box>
  );
}
