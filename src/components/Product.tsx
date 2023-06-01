import { Box, Button, Icon, Image } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

type Product = {
  img: string;
  link: string;
};

interface Props {
  product: Product;
}

export default function Product({ product }: Props) {
  const [productLink, setProductLink] = useState("");

  return (
    <Box
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
          display={productLink === product.link ? "block" : "none"}
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          bg="brand.200"
          _hover={{
            bg: "brand.100",
          }}
        >
          <Icon as={BsSearchHeart} /> View product
        </Button>
      </Link>
    </Box>
  );
}
