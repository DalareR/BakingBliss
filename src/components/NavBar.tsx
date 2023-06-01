import { HStack, Heading, Icon, Text, VStack, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const menuBox = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  animate: {
    opacity: 1,
    x: "0",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const menuItems = {
  initial: {
    opacity: 0,
    y: "-50%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    y: "-50%",
    opacity: 0,
  },
};

export default function NavBar() {
  const [hoveredItem, setHoveredItem] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Menu", link: "/menu" },
    { name: "Contact", link: "/contact" },
  ];

  console.log(selectedItem);

  return (
    <>
      <HStack justifyContent="space-between" p="0 1%" h="50px" bg="brand.50">
        <Link to="/">
          <Heading size="lg" fontWeight="600">
            Baking Bliss
          </Heading>
        </Link>
        <HStack display={{ base: "none", md: "flex" }}>
          {navItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <Text
                pos="relative"
                _before={{
                  position: "absolute",
                  bottom: "-5px",
                  left: 0,
                  content: `''`,
                  width:
                    hoveredItem === item.name || selectedItem === item.name
                      ? "100%"
                      : 0,
                  height: "2px",
                  bg: "black",
                  transition: "all .3s ease",
                }}
                onMouseOver={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem("")}
                onClick={() => setSelectedItem(item.name)}
              >
                {item.name}
              </Text>
            </Link>
          ))}
          <HStack>
            <Icon as={BsInstagram} boxSize={5} ml="3" />
            <Icon as={AiOutlineFacebook} boxSize={6} fontWeight={"bold"} />
          </HStack>
        </HStack>
        {/* Menu Icon for Mobile devices */}
        <Icon
          display={{ base: "block", md: "none" }}
          as={menuCollapsed ? HiMenuAlt4 : RxCross2}
          onClick={() => setMenuCollapsed(!menuCollapsed)}
        />
      </HStack>
      {/* Hidden Menu Bar for Mobile Devices */}
      <AnimatePresence>
        {!menuCollapsed && (
          <VStack
            justifyContent="center"
            as={motion.div}
            variants={menuBox}
            initial="initial"
            animate="animate"
            exit="exit"
            pos="fixed"
            right="0"
            w="100%"
            h="100%"
            bg="brand.50"
            display={{ base: "flex", md: "none" }}
            zIndex="1"
          >
            {navItems.map((item, index) => (
              <Box key={index} as={motion.div} variants={menuItems}>
                <Link to={item.link} onClick={() => setMenuCollapsed(true)}>
                  <Text
                    fontSize="2rem"
                    _before={{
                      position: "absolute",
                      bottom: "-5px",
                      left: 0,
                      content: `''`,
                      width:
                        hoveredItem === item.name || selectedItem === item.name
                          ? "100%"
                          : 0,
                      height: "3px",
                      bg: "black",
                      transition: "all .3s ease",
                    }}
                    onMouseOver={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem("")}
                    onClick={() => setSelectedItem(item.name)}
                  >
                    {item.name}
                  </Text>
                </Link>
              </Box>
            ))}
          </VStack>
        )}
      </AnimatePresence>
    </>
  );
}
