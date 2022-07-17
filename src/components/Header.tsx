import { Button, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {
  const { asPath, back } = useRouter();

  return (
    <Flex as="header" maxWidth={1440} mx="auto" py={{ base: "0", lg: "6" }}>
      {asPath !== "/" && (
        <Button onClick={() => back()} colorScheme="gray">
          <Image src="/back.svg" alt="" />
        </Button>
      )}
      <Image
        src="/logo.svg"
        mx="auto"
        alt="logo"
        h={{ base: 20, lg: 46 }}
        w={{ base: 120, lg: 184 }}
      />
    </Flex>
  );
}
