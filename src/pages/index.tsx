import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { ContinentCarousel } from "../components/ContinentCarousel";
import { TripCategories } from "../components/TripCategories";

const Home: NextPage = () => {
  const isWideScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      backgroundImage="url('/homeBackground.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
      h={{ base: 163, lg: 335 }}
      w="100%"
      px={{ base: 0, lg: 140 }}
    >
      <Flex
        pl={{ base: "1rem", lg: 0 }}
        maxWidth={1160}
        mx="auto"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack spacing="5">
          <Text
            color="gray.100"
            fontSize={{ base: "1.25rem", lg: "4xl" }}
            fontWeight="medium"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text color="gray.200" fontSize={{ base: "0.875rem", lg: "1.25rem" }}>
            Chegou a hora de tirar do papel a viagem que você{" "}
            {isWideScreen && <br />} sempre sonhou.
          </Text>
        </Stack>
        {isWideScreen && (
          <Image src="/airplane.png" alt="Plane" marginTop="28" />
        )}
      </Flex>
      <Flex maxWidth={1160} flexDir="column" mx="auto" alignItems="center">
        <TripCategories />
        <Divider w={90} borderWidth={1} borderColor="gray.400" />
        <Text
          textAlign="center"
          my="12"
          fontSize={{base: '1.25rem', lg: "4xl" }}
          fontWeight="medium"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
        <ContinentCarousel />
      </Flex>
    </Box>
  );
};

export default Home;
