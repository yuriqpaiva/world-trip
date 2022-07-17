import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { ContinentSwiperSlide } from "./ContinentSwiperSlide";

const carouselContents = [
  {
    title: "Europa",
    legend: "O continente mais antigo",
    imgUrl: "/continents/europe.jpg",
    slug: "europe",
  },
  {
    title: "América do Sul",
    legend: "O melhor do clima Tropical",
    imgUrl: "/continents/south_america.jpg",
    slug: "south_america",
  },
  {
    title: "América do Norte",
    legend: "O continente mais moderno",
    imgUrl: "/continents/north_america.jpg",
    slug: "north_america",
  },
  {
    title: "África",
    legend: "Um continente com muita cultura",
    imgUrl: "/continents/africa.jpg",
    slug: "africa",
  },
  {
    title: "Ásia",
    legend: "Mergulhe na cultura oriental",
    imgUrl: "/continents/asia.jpg",
    slug: "asia",
  },
  {
    title: "Oceania",
    legend: "Conheça toda a beleza dos oceanos",
    imgUrl: "/continents/oceania.jpg",
    slug: "oceania",
  },
];

export function ContinentCarousel() {
  return (
    <Box overflow="hidden" maxWidth={1240} width="100%">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="container"
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        {carouselContents.map((content) => (
          <SwiperSlide key={content.title}>
            <ContinentSwiperSlide
              title={content.title}
              legend={content.legend}
              imgUrl={content.imgUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
