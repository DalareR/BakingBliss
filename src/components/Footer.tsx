import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Flex direction="column" gap="5" align="center" p="5% 0" bg="brand.50">
      <HStack justify="space-around" p="5" w="100%">
        <Flex direction={{ base: "column", md: "row" }} gap="3">
          <Link to="/">
            <Text fontWeight="bold">Home</Text>
          </Link>
          <Link to="/">
            <Text fontWeight="bold">About</Text>
          </Link>
          <Link to="/">
            <Text fontWeight="bold">Menu</Text>
          </Link>
          <Link to="/">
            <Text fontWeight="bold">Contact</Text>
          </Link>
        </Flex>
        <HStack>
          <Link to="/">
            <Icon
              as={BsInstagram}
              boxSize={5}
              _hover={{ transform: `scale(1.1)` }}
            />
          </Link>
          <Link to="/">
            <Icon
              as={AiOutlineFacebook}
              boxSize={6}
              fontWeight={"bold"}
              _hover={{ transform: `scale(1.1)` }}
            />
          </Link>
        </HStack>
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
