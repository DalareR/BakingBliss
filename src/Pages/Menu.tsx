import { Grid } from "@chakra-ui/react";
import Product from "../components/Product";

export default function Menu() {
  const menuItems = [
    {
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      link: "/test",
    },
    {
      img: "https://images.unsplash.com/photo-1609873539027-d4ad052cb6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      link: "/test2",
    },
    {
      img: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      link: "/test3",
    },
    {
      img: "https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/test4",
    },
    {
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      link: "/test5",
    },
    {
      img: "https://images.unsplash.com/photo-1609873539027-d4ad052cb6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      link: "/test6",
    },
    {
      img: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      link: "/test7",
    },
    {
      img: "https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/test8",
    },
    {
      img: "https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/test9",
    },
    {
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      link: "/test10",
    },
    {
      img: "https://images.unsplash.com/photo-1609873539027-d4ad052cb6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      link: "/test11",
    },
    {
      img: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      link: "/test12",
    },
    {
      img: "https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      link: "/test13",
    },
  ];

  return (
    <>
      <Grid
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
    </>
  );
}
