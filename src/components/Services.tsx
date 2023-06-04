import { Heading, Image, VStack, Text, Stack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//local
import Btn from "./Btn";

const variant = {
  initial: { opacity: 0, x: "-100%" },
  whileInView: {
    opacity: 1,
    x: "0%",
    transition: { delay: 0.2 },
  },
};

export default function Services() {
  const services = [
    {
      title: "Local & Homemade",
      img: "https://images.unsplash.com/photo-1609320034420-0e15d165951e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
      desc: `We take pride in offering a delightful selection of homemade baked goods that are crafted with love and care. At our bakery, we prioritize using locally sourced ingredients to ensure the highest quality and to support our community's farmers and suppliers. We are passionate about our craft and put our heart into every item we create, resulting in delectable pastries, bread, cakes, and more.`,
      link: "/menu",
      btn: "View Menu",
    },
    {
      title: "For Gifts & Other Occasions",
      img: "https://images.unsplash.com/photo-1575613585261-9a70817dda7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      desc: `For those searching for the ideal gift, our bakery offers an array of elegantly packaged treats. Imagine presenting a beautifully arranged gift box filled with an assortment of freshly baked cookies, scrumptious cupcakes, and artisanal pastries. Each item is carefully crafted to captivate the senses, featuring intricate designs, mouthwatering flavors, and a perfect balance of textures.`,
      link: "/menu",
      btn: "View Menu",
    },
  ];

  return (
    <Stack as={motion.div} bgColor="brand.100" gap="30" p={{ md: "10" }}>
      {services.map((service, index) => (
        <Flex
          as={motion.div}
          variants={variant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          direction={{ base: "column", md: "row" }}
          key={index}
          gap="10"
          align="center"
          p={{ base: "2", md: "none" }}
          className="service"
        >
          <Image
            w="400px"
            h="400px"
            objectFit="cover"
            objectPosition="center"
            src={service.img}
            className="serviceImg"
          />
          <VStack align="start">
            <Heading>{service.title}</Heading>
            <Text>{service.desc}</Text>
            <Link to={service.link}>
              <Btn title={service.btn} colorScheme="brand" variant="solid" />
            </Link>
          </VStack>
        </Flex>
      ))}
    </Stack>
  );
}
