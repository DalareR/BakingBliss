import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
//local
import bg from "./assets/icons/bakeryBg.svg";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <Box minH="100vh" bg={`url(${bg})`} bgColor="brand.50">
      <Grid
        m="auto"
        maxW={{ base: "100svw", md: "120ch" }}
        gridTemplateRows={"50px auto"}
        // outline="2px solid lightgreen"
      >
        <GridItem>
          <NavBar />
        </GridItem>
        <GridItem>
          <Hero />
          {/* <About /> */}
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
