import { Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
// local
import aboutImg from "../assets/images/aboutImg.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Grid
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
      w="100%"
      mt="5"
      gap="5"
      p="2"
      gridTemplateAreas={{ base: `'img' 'desc'`, md: `"desc img"` }}
      gridTemplateRows={{ base: "1fr 2fr", md: "auto" }}
      gridTemplateColumns={{ base: "auto", md: "2fr 1fr" }}
    >
      <GridItem gridArea="img">
        <Image
          w="100%"
          h="100%"
          minH={{ md: "400px" }}
          maxH="400px"
          src={aboutImg}
          objectFit="cover"
          objectPosition="center"
        />
      </GridItem>
      <GridItem gridArea="desc">
        <VStack align="start">
          <Heading fontWeight="400" textDecor="underline" mb={{ md: "3" }}>
            About
          </Heading>
          <Text>
            Welcome to <b>Baking Bliss</b>, a family-operated bakery located in
            the heart of Boston! We are passionate about baking delicious cakes,
            cupcakes, and pastries. Our recipes have been handed down from one
            generation to the next and are sure to please even the pickiest of
            eaters. We strive to use only the freshest ingredients in our
            products, and everything is prepared with lots of love and care. We
            offer a variety of delicious flavors and strive to make something
            for everyone. Stop by our bakery today to grab a fresh pastry or
            indulge in one of our decadent cakes and pastries. We can’t wait for
            you to try <b>Baking Bliss</b>!
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  );
}
