import {
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
//local
import aboutImg from "../assets/images/aboutImg.jpg";
import { Link } from "react-router-dom";

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
    <Stack bgColor="brand.100" gap="30" p={{ md: "10" }}>
      {services.map((service, index) => (
        <Flex
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
              <Button colorScheme="brand" borderRadius="none">
                {service.btn}
              </Button>
            </Link>
          </VStack>
        </Flex>
      ))}
    </Stack>
  );
}
