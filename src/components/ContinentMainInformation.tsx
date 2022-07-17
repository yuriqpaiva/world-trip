import { Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";

interface ContinentMainInformationProps {
  description: string;
  info: {
    countries: number;
    languages: number;
    cities: number;
  };
}

export function ContinentMainInformation({
  description,
  info,
}: ContinentMainInformationProps) {
  return (
    <SimpleGrid minChildWidth={600} my="20">
      <Text fontSize="2xl" maxWidth={600}>
        {description}
      </Text>
      <HStack display="flex" spacing="28">
        <Flex flexDir="column" align="center" fontWeight="semibold">
          <Text color="orange.400" fontSize="4xl">
            {info.countries}
          </Text>
          <Text fontSize="2xl">países</Text>
        </Flex>
        <Flex flexDir="column" align="center" fontWeight="semibold">
          <Text color="orange.400" fontSize="4xl">
            {info.languages}
          </Text>
          <Text fontSize="2xl">línguas</Text>
        </Flex>
        <Flex flexDir="column" align="center" fontWeight="semibold">
          <Text color="orange.400" fontSize="4xl">
            {info.cities}
          </Text>
          <Text fontSize="2xl">cidades +100</Text>
        </Flex>
      </HStack>
    </SimpleGrid>
  );
}
