import {
  Text,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { TfiClose } from "react-icons/tfi";
import { ProductType } from "./Product";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const variant = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
};

interface Props {
  product: ProductType;
}

export default function ProductDesc({ product }: Props) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <Box
        as={motion.div}
        w="100svw"
        h="100svh"
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
        pos="fixed"
        top="0"
        left="0"
        zIndex={1}
      >
        <Box
          w="100%"
          h="100%"
          bgColor="rgba(0,0,0,.1)"
          onClick={() => navigate("/menu")}
        />
        <Card
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          minW={{ base: "95%", md: "700px" }}
          p="2"
          direction={{ base: "column", sm: "row" }}
          // overflow="v"
          variant="outline"
          bg="brand.50"
          borderRadius="none"
          zIndex={2}
        >
          <Image
            objectFit="cover"
            minW={{ md: "300px" }}
            h={{ base: "200px", md: "400px" }}
            maxW={{ base: "100%", sm: "200px" }}
            src={product.img}
            alt="Caffe Latte"
          />
          <Icon
            as={TfiClose}
            boxSize="5"
            pos="absolute"
            top="10px"
            right="10px"
            bgColor={{ base: "rgba(0,0,0,.7)", md: "transparent" }}
            color={{ base: "white", md: "black" }}
            p={{ base: 1, md: 0 }}
            borderRadius={{ base: "50%", md: "none" }}
            cursor="pointer"
            onClick={() => navigate("/menu")}
          />
          <Stack>
            <CardBody>
              <Heading size="md">{product.title}</Heading>
              <Text py="2" maxH="250px" overflow="scroll">
                {product.desc}
              </Text>
            </CardBody>
            {/* <CardFooter>
              <Button variant="solid" bg="brand.200" _hover={{ bg: "brand.100" }}>
                Buy Latte
              </Button>
            </CardFooter> */}
          </Stack>
        </Card>
      </Box>
    </AnimatePresence>
  );
}
