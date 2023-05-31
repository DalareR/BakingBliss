import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//local
import fruittart from "../assets/images/fruittart.jpg";
import gingerbread from "../assets/images/gingerbread.jpg";
import poundCake from "../assets/images/poundCake.jpg";
import lemonPie from "../assets/images/lemonPie.jpg";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  const imgCarousel = [fruittart, gingerbread, poundCake, lemonPie];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === imgCarousel.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <Grid
        h="90%"
        w="100%"
        gridTemplateColumns={{ md: "1fr 1fr" }}
        gridTemplateRows={{ base: "2fr 1fr", md: "auto" }}
        gap="5"
        alignItems="center"
        overflow="hidden"
      >
        <GridItem w="100%" h="100%" overflow="hidden">
          <Flex
            w="100%"
            h="100%"
            transform={`translate(-${index * 100}%)`}
            transition="all .5s ease"
          >
            {imgCarousel.map((img, index) => (
              <Image
                w="100%"
                h="100%"
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
            <Heading size="lg" fontWeight="regular">
              We strive to provide delicious, freshly-baked treats for all
              occasions
            </Heading>
            <Link to="/">
              <Button
                color="brand.400"
                bg="none"
                outline="2px solid #fa7527"
                height="25px"
                p="2"
                borderRadius="3px"
              >
                View Menu
              </Button>
            </Link>
          </VStack>
        </GridItem>
      </Grid>
    </AnimatePresence>
  );
}
