import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import coin2 from "../assets/coin2.png";
import { motion } from "framer-motion";
import Footer from "./footer";

const Home = () => {
  return (
    <>
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"120vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={coin2}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"5xl"}
        textAlign={"center"}
        fontFamily={"Caprasimo"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
      >
        CRYPTOLITH
      </Text>
      
    </Box>
    <Footer />
    </>
  );
};

export default Home;
