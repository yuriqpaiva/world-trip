import { Flex, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  name: string;
  bannerUrl: string;
}

export function ContinentBanner({ name, bannerUrl }: ContinentBannerProps) {
  return (
    <Flex
      h={500}
      w="100%"
      bgPosition="center"
      bg="black"
      _before={{
        content: `""`,
        position: "absolute",
        width: "100%",
        height: 500,
        backgroundImage: `url('${bannerUrl}')`,
        backgroundPosition: "center",
        opacity: "0.4",
      }}
      alignItems="flex-end"
    >
      <Text
        color="gray.100"
        fontSize="5xl"
        marginLeft={140}
        marginBottom={59}
        fontWeight="semibold"
        width={1160}
        mx="auto"
        zIndex={1000}
      >
        {name}
      </Text>
    </Flex>
  );
}
