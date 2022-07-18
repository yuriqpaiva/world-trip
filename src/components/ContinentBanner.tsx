import { Flex, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  name: string;
  bannerUrl: string;
}

export function ContinentBanner({ name, bannerUrl }: ContinentBannerProps) {
  return (
    <Flex
      h={{ base: 150, lg: 500 }}
      w="100%"
      bgPosition="center"
      bg="black"
      _before={{
        content: `""`,
        position: "absolute",
        width: "100%",
        height: { base: 150, lg: 500 },
        backgroundImage: `url('${bannerUrl}')`,
        backgroundPosition: "center",
        opacity: "0.4",
      }}
      position="relative"
      alignItems="flex-end"
    >
      <Text
        px={{ base: "4", lg: "6" }}
        color="gray.100"
        textAlign={{ base: "center", lg: "start" }}
        fontSize={{ base: "1.75rem", lg: "5xl" }}
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
