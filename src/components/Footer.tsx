import {
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Flex
      // pos="absolute"
      // bottom="0"
      w="100%"
      direction="column"
      gap="5"
      align="center"
      p="2% 0"
      bg="brand.50"
      mt="5"
      boxShadow="-3px -3px 10px rgba(0,0,0,.05)"
    >
      <HStack justify="space-around" p="5" w="100%">
        <Flex display={{ base: "none", md: "flex" }} gap="3">
          <Link to="/">
            <Text fontWeight="bold">Home</Text>
          </Link>
          <Link to="/about">
            <Text fontWeight="bold">About</Text>
          </Link>
          <Link to="/menu">
            <Text fontWeight="bold">Menu</Text>
          </Link>
          <Link to="/contact">
            <Text fontWeight="bold">Contact</Text>
          </Link>
        </Flex>
        <VStack align={{ base: "center", md: "start" }}>
          <VStack align="start">
            <HStack>
              <Icon as={BsTelephoneFill} />
              <Heading size="xsm" fontWeight="500">
                717-123-456
              </Heading>
            </HStack>
            <HStack>
              <Icon as={MdEmail} />
              <Heading size="xsm" fontWeight="500">
                dalarerana@gmail.com
              </Heading>
            </HStack>
          </VStack>
          <Divider borderColor="black" />
          <HStack>
            <Link target="_blank" to="https://instagram.com">
              <Icon
                as={BsInstagram}
                boxSize={5}
                cursor="pointer"
                transition="all .3s ease"
                _hover={{ transform: "scale(1.1)", color: "brand.500" }}
              />
            </Link>
            <Link target="_blank" to="https://facebook.com">
              <Icon
                as={AiOutlineFacebook}
                boxSize={6}
                fontWeight={"bold"}
                cursor="pointer"
                transition="all .3s ease"
                _hover={{ transform: "scale(1.1)", color: "brand.500" }}
              />
            </Link>
          </HStack>
        </VStack>
      </HStack>
      <Text>
        Website created by{" "}
        <Link target="_blank" to="https://www.dalarerana.com">
          <b>Dalare Rana</b>
        </Link>
      </Text>
    </Flex>
  );
}
