import { Divider, Flex, Text } from "@chakra-ui/react";
import { ContinentCarousel } from "./ContinentCarousel";
import { TripCategories } from "./TripCategories";

export function HomeMainContent() {
  return (
    <Flex maxWidth={1160} flexDir="column" mx="auto" alignItems="center">
      <TripCategories />
      <Divider w={90} borderWidth={1} borderColor="gray.400" />
      <Text
        textAlign="center"
        my="12"
        fontSize={{ base: "1.25rem", lg: "4xl" }}
        fontWeight="medium"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Text>
      <ContinentCarousel />
    </Flex>
  );
}
