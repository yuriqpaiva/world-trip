import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { ContinentCarousel } from "../components/ContinentCarousel";
import { HomeBanner } from "../components/HomeBanner";
import { HomeMainContent } from "../components/HomeMainContent";
import { TripCategories } from "../components/TripCategories";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | World Trip</title>
      </Head>
      <HomeBanner />
      <HomeMainContent />
    </>
  );
};

export default Home;
