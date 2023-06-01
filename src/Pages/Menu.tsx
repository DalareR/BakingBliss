import { Grid } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
//local
import Product from "../components/Product";
import { menuItems } from "../data";

const variantParent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    x: "100%",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.08,
    },
  },
};

export default function Menu() {
  return (
    <>
      <AnimatePresence>
        <Grid
          as={motion.div}
          variants={variantParent}
          initial="initial"
          animate="animate"
          exit="exit"
          justifyContent="center"
          justifyItems="center"
          gap="3"
          templateColumns={{ base: "auto", md: "1fr 1fr 1fr 1fr" }}
          mt={{ base: "5", md: "10" }}
          p={{ base: 2, md: "none" }}
        >
          {menuItems.map((item, index) => (
            <Product key={index} product={item} />
          ))}
        </Grid>
      </AnimatePresence>
    </>
  );
}
