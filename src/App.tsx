import { Box, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
//local
import bg from "./assets/icons/bakeryBg.svg";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Menu from "./Pages/Menu";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";

function App() {
  return (
    <VStack
      justify="space-between"
      minH="100vh"
      bg={`url(${bg})`}
      bgColor="brand.50"
    >
      <Box w="100%" maxW={{ base: "100%", md: "120ch" }}>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="/menu" element={<Menu />}>
            <Route path=":id" element={<Menu />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Box w="100%" maxW={{ base: "100svw", md: "120ch" }}>
        <Footer />
      </Box>
    </VStack>
  );
}

export default App;
