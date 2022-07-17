import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

export function ContinentCarousel() {
  return (
    <Box overflow="hidden" maxWidth={1240}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="container"
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="item">
          <Flex
            backgroundImage="url('/continents/europe.png')"
            h="100%"
            flexDirection="column"
            justify="center"
            align="center"
            fontWeight="bold"
          >
            <Text fontSize="5xl" color="gray.100">
              Europa
            </Text>
            <Text fontSize="2xl" color="gray.200">
              O continente mais antigo
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide className="item">Slide 2</SwiperSlide>
        <SwiperSlide className="item">Slide 3</SwiperSlide>
        <SwiperSlide className="item">Slide 4</SwiperSlide>
      </Swiper>
    </Box>
  );
}
