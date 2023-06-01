import { Flex, Grid, GridItem, Heading, Image, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
//local
import fruittart from "../assets/images/fruittart.jpg";
import gingerbread from "../assets/images/gingerbread.jpg";
import poundCake from "../assets/images/poundCake.jpg";
import lemonPie from "../assets/images/lemonPie.jpg";
import Btn from "./Btn";

export default function Hero() {
  const imgCarousel = [fruittart, gingerbread, poundCake, lemonPie];
  const [winH, setWinH] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setWinH(window.innerHeight);
    const interval = setInterval(() => {
      setIndex((prev) => (prev === imgCarousel.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  window.addEventListener("resize", () => {
    setWinH(window.innerHeight);
  });

  return (
    <AnimatePresence>
      <Grid
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0 }}
        w="100%"
        h={`${winH - 50}px`}
        bg="brand.50"
        gridTemplateColumns={{ md: "1.5fr 1fr" }}
        gridTemplateRows={{ base: "2fr 1fr", md: "auto" }}
        gap="5"
        alignItems="center"
        overflow="hidden"
        // outline="2px solid red"
      >
        <GridItem w="100%" h="100%" overflow="hidden">
          <Flex
            w="100%"
            h="100%"
            align="center"
            transform={`translate(-${index * 100}%)`}
            transition="all .5s ease"
          >
            {imgCarousel.map((img, index) => (
              <Image
                w="100%"
                h="100%"
                maxH="800px"
                flexShrink="0"
                key={index}
                objectFit="cover"
                objectPosition="center"
                src={img}
              />
            ))}
          </Flex>
        </GridItem>
        <GridItem>
          <VStack align="start" p="2">
            <Heading color="brand.500" size="2xl">
              Eat Healthy Sweets
            </Heading>
            <Heading size="lg" fontWeight="regular">
              We strive to provide delicious, freshly-baked treats for all
              occasions
            </Heading>
            <Link to="/">
              <Btn title="View Menu" colorScheme="brand" />
            </Link>
          </VStack>
        </GridItem>
      </Grid>
    </AnimatePresence>
  );
}
