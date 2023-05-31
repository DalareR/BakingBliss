import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Box h="100vh" w="100vw" m="auto" maxW={{ base: "100vw", md: "120ch" }}>
        <NavBar />
        <Hero />
      </Box>
    </>
  );
}

export default App;
