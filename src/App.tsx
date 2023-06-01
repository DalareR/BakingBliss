import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
//local
import bg from "./assets/icons/bakeryBg.svg";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Menu from "./Pages/Menu";

function App() {
  return (
    <Box minH="100vh" bg={`url(${bg})`} bgColor="brand.50">
      <Box m="auto" maxW={{ base: "100svw", md: "120ch" }}>
        <NavBar />
        <Menu />
        {/* <Home /> */}
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
