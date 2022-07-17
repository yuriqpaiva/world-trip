import {
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";

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
    <SimpleGrid columns={2} my="20" spacing="16">
      <Text fontSize="2xl" maxWidth={600}>
        {description}
      </Text>
      <HStack display="flex" spacing="20">
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
          <Text fontSize="2xl">
            <Text mr="1" display="inline">
              cidades +100
            </Text>
            <Tooltip
              label="Mais de cem cidades para serem visitadas"
              bg="gray.600"
              fontWeight="medium"
              borderRadius={8}
              hasArrow
              p="2"
            >
              <Image src="/info.svg" display="inline" alt="Information icon" />
            </Tooltip>
          </Text>
        </Flex>
      </HStack>
    </SimpleGrid>
  );
}
