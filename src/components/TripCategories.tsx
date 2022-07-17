import {
  Flex,
  HStack,
  Icon,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { DotIcon } from "./icons/DotIcon";

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
  const isWideScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      mt={{ base: "9", lg: "28" }}
      mb={{ base: 5, lg: "20" }}
      w="100%"
      px={{ base: 0, md: "12", lg: 0 }}
    >
      <UnorderedList
        listStyleType="none"
        display="flex"
        justifyContent={{ base: "center", lg: "space-between" }}
        flex="1"
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        {tripCategories.map((category, index) => {
          return (
            <ListItem
              key={category.name}
              display="flex"
              mx={{ base: "10", lg: 0 }}
              justifyContent="center"
              alignItems="center"
              listStyleType="circle"
            >
              <Stack
                spacing={{ base: "2", lg: "4" }}
                display="flex"
                alignItems="center"
                direction={{ base: "row", lg: "column" }}
                mb={5}
              >
                {isWideScreen && <Image src={category.img} alt="" />}
                {!isWideScreen && <Icon as={DotIcon} />}
                <Text
                  fontWeight="semibold"
                  fontSize={{ base: "1.125rem ", lg: "2xl" }}
                >
                  {category.name}
                </Text>
              </Stack>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Flex>
  );
}
