import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitcher from "./ColorModeSwitcher";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
