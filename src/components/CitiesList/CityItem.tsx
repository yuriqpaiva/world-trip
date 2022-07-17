import { Flex, Image, Text } from "@chakra-ui/react";

interface CityItemProps {
  country: string;
  city: string;
  flagImg: string;
  cityImg: string;
}

export function CityItem({ country, city, cityImg, flagImg }: CityItemProps) {
  return (
    <Flex
      flexDir="column"
      maxW={256}
      borderWidth={1}
      borderColor="orange.400"
      borderRadius={4}
    >
      <Image src={cityImg} alt="" w={256} borderTopRadius={4} />
      <Flex justify="space-between" align="center" px="6" h={106}>
        <Flex flexDir="column">
          <Text fontSize="1.25rem" fontWeight="semibold" color="gray.400">
            {city}
          </Text>
          <Text fontWeight="medium" color="gray.300">
            {country}
          </Text>
        </Flex>
        <Image src={flagImg} alt="" w={30} h={30} />
      </Flex>
    </Flex>
  );
}
