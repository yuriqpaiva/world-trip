import { Button, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {
  const { asPath, back } = useRouter();

  return (
    <Flex as="header" maxWidth={1440} mx="auto" py="6">
      {asPath !== "/" && (
        <Button onClick={() => back()} colorScheme="gray">
          <Image src="/back.svg" alt="" />
        </Button>
      )}
      <Image src="/logo.svg" mx="auto" alt="logo" />
    </Flex>
  );
}
