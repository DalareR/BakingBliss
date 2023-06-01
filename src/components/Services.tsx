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
      desc: `'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        molestiae sit amet hic. Voluptas cumque sint neque quisquam, nihil
        totam!`,
      link: "/",
      btn: "Shop",
    },
    {
      title: "For Gifts & Other Occassions",
      img: "https://images.unsplash.com/photo-1575613585261-9a70817dda7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      desc: `'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          molestiae sit amet hic. Voluptas cumque sint neque quisquam, nihil
          totam!`,
      link: "/",
      btn: "Shop",
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
