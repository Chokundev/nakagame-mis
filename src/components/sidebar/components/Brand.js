import React from "react";

// Chakra imports
import { Flex, Img, useColorModeValue } from "@chakra-ui/react";
import Logo from './nakagame-logo.svg';

// Custom components
// import { HorizonLogo } from "components/icons/Icons";
// import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <img src={Logo} ></img>
    </Flex>
    
    
  );
}

export default SidebarBrand;
