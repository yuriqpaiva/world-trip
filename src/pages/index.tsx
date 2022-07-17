import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

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
    </Box>
  );
};

export default Home;
