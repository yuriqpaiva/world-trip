import {
  Flex,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const tripCategories = [
  {
    name: "vida noturna",
    img: "/cocktail.svg",
  },
  {
    name: "praia",
    img: "/surf.svg",
  },
  {
    name: "moderno",
    img: "/building.svg",
  },
  {
    name: "clássico",
    img: "/museum.svg",
  },
  {
    name: "e mais...",
    img: "/globe.svg",
  },
];

export function TripCategories() {
  return (
    <Flex marginTop="28" mb="20" w="100%">
      <UnorderedList
        listStyleType="none"
        display="flex"
        justifyContent="space-between"
        flex="1"
      >
        {tripCategories.map((category) => (
          <ListItem
            key={category.name}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack spacing="4" display="flex" alignItems="center">
              <Image src={category.img} alt="" />
              <Text fontWeight="semibold">{category.name}</Text>
            </Stack>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}
