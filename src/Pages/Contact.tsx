import {
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { motion } from "framer-motion";

const variantParent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const variantChildren = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: "100%",
  },
};

export default function Contact() {
  return (
    <Grid
      w={{ md: "120ch" }}
      gridTemplateAreas={{ base: `'info' 'form'`, md: `'form info'` }}
    >
      <GridItem
        as={motion.div}
        variants={variantParent}
        initial="initial"
        animate="animate"
        exit="exit"
        p="5"
        gridArea="info"
      >
        <VStack align="start">
          <Heading
            as={motion.div}
            variants={variantChildren}
            display={{ base: "block", md: "none" }}
            mb="3"
          >
            How can we help?
          </Heading>
          <VStack as={motion.div} variants={variantChildren} align="start">
            <Text fontSize="md" fontWeight="bold">
              CONTACT DETAILS
            </Text>
            <Heading
              as={motion.div}
              variants={variantChildren}
              size={{ base: "xs", md: "md" }}
            >
              info@bakerybliss.com
            </Heading>
            <Heading
              as={motion.div}
              variants={variantChildren}
              size={{ base: "xs", md: "md" }}
            >
              +1(717)-123-456
            </Heading>
          </VStack>
        </VStack>
        <Divider display={{ md: "none" }} borderColor="black" m="15% 0" />
      </GridItem>
      <GridItem
        as={motion.div}
        variants={variantParent}
        initial="initial"
        animate="animate"
        exit="exit"
        p="5"
        gridArea="form"
      >
        <Heading
          as={motion.div}
          variants={variantChildren}
          display={{ base: "none", md: "block" }}
          mb="10"
        >
          How can we help?
        </Heading>
        <form>
          <FormInput
            as={true}
            variants={variantChildren}
            name="name"
            label="What is you Name?"
            placeholder="John Smith *"
          />
          <FormInput
            as={true}
            variants={variantChildren}
            name="email"
            label="What is you email?"
            placeholder="john@gmail.com *"
          />
          <FormInput
            as={true}
            variants={variantChildren}
            name="subject"
            label="What service are you looking for?"
            placeholder="Order a dozen of cookie..."
          />
          <FormTextArea
            as={true}
            variants={variantChildren}
            name="message"
            label="Your message"
            placeholder="Hello Dal, can you help me with..."
          />
          <Button
            as={motion.div}
            variants={variantChildren}
            type="submit"
            colorScheme="brand"
          >
            Send
          </Button>
        </form>
      </GridItem>
    </Grid>
  );
}
