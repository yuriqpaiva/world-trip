import { Box, Flex, Image, Stack, Text, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import { ContinentCarousel } from "../components/ContinentCarousel";
import { TripCategories } from "../components/TripCategories";

const Home: NextPage = () => {
  return (
    <Box
      backgroundImage="url('/homeBackground.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      h={335}
      w="100%"
    >
      <Flex
        px={140}
        w={1440}
        mx="auto"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack spacing="5">
          <Text color="gray.100" fontSize="4xl" w={426} fontWeight="medium">
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text color="gray.200">
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Stack>
        <Image src="/airplane.png" alt="Plane" marginTop="28" />
      </Flex>
      <Flex maxWidth={1440} flexDir="column" mx="auto" alignItems="center">
        <TripCategories />
        <Divider w={90} borderWidth={1} borderColor="gray.400" />
        <Text textAlign="center" my="12" fontSize="4xl" fontWeight="medium">
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
        <ContinentCarousel />
      </Flex>
    </Box>
  );
};

export default Home;
