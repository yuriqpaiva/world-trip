import { Button, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {
  const { asPath, back } = useRouter();

  return (
    <Flex
      as="header"
      maxWidth={1440}
      mx="auto"
      py={{ base: "0", lg: "6" }}
      pos="relative"
    >
      {asPath !== "/" && (
        <Button
          onClick={() => back()}
          colorScheme="gray"
          pos="absolute"
          left="0"
          top="0"
          bottom="0"
          mt="auto"
          mb="auto"
        >
          <Image src="/back.svg" alt="" />
        </Button>
      )}
      <Image
        mx="auto"
        src="/logo.svg"
        alt="logo"
        h={{ base: 20, lg: 46 }}
        w={{ base: 120, lg: 184 }}
      />
    </Flex>
  );
}
