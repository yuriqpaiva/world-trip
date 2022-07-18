import {
  Box,
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
    <SimpleGrid
      columns={{ lg: 2 }}
      my={{ base: "6", lg: "20" }}
      spacing={{ base: "1rem", lg: "16" }}
      mx="auto"
      justifyContent="center"
    >
      <Text fontSize={{ base: "0.875rem", lg: "2xl" }} maxWidth={600}>
        {description}
      </Text>
      <HStack display="flex" spacing="20" mb={{ base: "0.5rem", lg: 0 }}>
        <Flex
          flexDir="column"
          align={{ base: "start", lg: "center" }}
          fontWeight="semibold"
        >
          <Text color="orange.400" fontSize={{ base: "2xl", lg: "4xl" }}>
            {info.countries}
          </Text>
          <Text
            fontSize={{ base: "1.125rem", lg: "2xl" }}
            fontWeight={{ base: "normal", lg: "semibold" }}
          >
            países
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          align={{ base: "start", lg: "center" }}
          fontWeight="semibold"
        >
          <Text color="orange.400" fontSize={{ base: "2xl", lg: "4xl" }}>
            {info.languages}
          </Text>
          <Text
            fontSize={{ base: "1.125rem", lg: "2xl" }}
            fontWeight={{ base: "normal", lg: "semibold" }}
          >
            línguas
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          align={{ base: "start", lg: "center" }}
          fontWeight="semibold"
        >
          <Text color="orange.400" fontSize={{ base: "2xl", lg: "4xl" }}>
            {info.cities}
          </Text>
          <Box>
            <Text
              mr="1"
              display="inline"
              fontWeight={{ base: "normal", lg: "semibold" }}
              fontSize={{ base: "1.125rem", lg: "2xl" }}
            >
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
          </Box>
        </Flex>
      </HStack>
    </SimpleGrid>
  );
}
