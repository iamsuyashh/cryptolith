import { HStack, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import Logo from "../assets/Logo.png";


const Header = () => {
  return (
    <>
      <HStack p={'2'} shadow={'base'} bgColor={'blackAlpha.900'}>
         <Link to="/"><Image boxSize="50px" src={Logo} alt="logo" _activeLink={""}/></Link> 
        <Button pr={'3'} color="#E6FFFA" variant="link">
          <Link to="/">Home</Link>
        </Button>
        <Button pr={'3'} color="#E6FFFA" variant="link">
          <Link to = "/exchanges">Exchange</Link>
        </Button>
        <Button pr={'3'}color="#E6FFFA" variant="link">
          <Link to='/coins'>Coins</Link>
        </Button>
      </HStack>
    </>
  );
};

export default Header;
