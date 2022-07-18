import { Box, Flex, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { ContinentSwiperSlide } from "./ContinentSwiperSlide";

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
              slug={content.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

const carouselContents = [
  {
    title: "Europa",
    legend: "O continente mais antigo",
    imgUrl:
      "https://images.unsplash.com/photo-1493707553966-283afac8c358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    slug: "europe",
  },
  {
    title: "América do Sul",
    legend: "O melhor do clima Tropical",
    imgUrl:
      "https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    slug: "south_america",
  },
  {
    title: "América do Norte",
    legend: "O continente mais moderno",
    imgUrl:
      "https://images.unsplash.com/photo-1616832880699-8541b04005ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    slug: "north_america",
  },
  {
    title: "África",
    legend: "Um continente com muita cultura",
    imgUrl:
      "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    slug: "africa",
  },
  {
    title: "Ásia",
    legend: "Mergulhe na cultura oriental",
    imgUrl:
      "https://images.unsplash.com/photo-1532236395709-7d70320fec2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1802&q=80",
    slug: "asia",
  },
  {
    title: "Oceania",
    legend: "Conheça toda a beleza dos oceanos",
    imgUrl:
      "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    slug: "oceania",
  },
];
