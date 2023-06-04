import { Box, Button, Icon, Image } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { menuItems } from "../data";
import { motion } from "framer-motion";
//local
import ProductDesc from "./ProductDesc";

const variantChild = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  exit: {
    x: 0,
  },
};

export type ProductType = {
  title: string;
  img: string;
  link: string;
  desc: string;
};

interface Props {
  product: ProductType;
}

export default function Product({ product }: Props) {
  const [productLink, setProductLink] = useState("");
  const params = useParams();
  const viewProduct = menuItems.filter((item) => item.link === params.id);

  return (
    <>
      <Box
        as={motion.div}
        variants={variantChild}
        w="100%"
        h={{ base: "300px", md: "400px" }}
        position="relative"
        onMouseOver={() => setProductLink(product.link)}
        onMouseLeave={() => setProductLink("")}
        _before={{
          opacity: product.link === productLink ? 1 : 0,
          content: `''`,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          bg: "rgba(0,0,0,.5)",
          transition: "all .3s",
        }}
      >
        <Image
          w="100%"
          h="100%"
          src={product.img}
          objectFit="cover"
          objectPosition="center"
        />
        <Link to={product.link}>
          <Button
            opacity={productLink === product.link ? 1 : 0}
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%,-50%)"
            bg="brand.200"
            transition="all .5s ease"
            _hover={{
              bg: "brand.100",
            }}
          >
            <Icon as={BsSearchHeart} /> View product
          </Button>
        </Link>
      </Box>
      {viewProduct[0] && (
        <ProductDesc key={viewProduct[0].link} product={viewProduct[0]} />
      )}
    </>
  );
}
