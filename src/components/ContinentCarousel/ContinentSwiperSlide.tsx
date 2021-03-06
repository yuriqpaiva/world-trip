import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

interface ContinentSwiperSlideProps {
  title: string;
  legend: string;
  imgUrl: string;
  slug: string;
}

export function ContinentSwiperSlide({
  title,
  legend,
  imgUrl,
  slug,
}: ContinentSwiperSlideProps) {
  return (
    <Link href={`/continent/${slug}`} passHref>
      <Flex
        as="a"
        h="100%"
        flexDirection="column"
        justify="center"
        align="center"
        fontWeight="bold"
        bg="black"
        zIndex={3}
        _before={{
          content: `""`,
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url('${imgUrl}')`,
          backgroundRepeat: "no-repeat",
          bgSize:"cover",
          backgroundPosition: "center",
          opacity: "0.4",
        }}
      >
        <Text fontSize={{ base: "2xl", lg: "5xl" }} color="gray.100" zIndex={2}>
          {title}
        </Text>
        <Text
          fontSize={{ base: "0.875rem", lg: "2xl" }}
          color="gray.200"
          zIndex={2}
        >
          {legend}
        </Text>
      </Flex>
    </Link>
  );
}
