import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <HStack mt={5} mb={10} justify="center">
      <Text
        textAlign="center"
        color={colorMode === "light" ? "black.50" : "gray.300"}
        fontSize="12px"
        fontWeight="thin"
      >
        Made with
      </Text>
      <AiFillHeart />
      <Text
        textAlign="center"
        color={colorMode === "light" ? "black.50" : "gray.300"}
        fontSize="12px"
        fontWeight="thin"
      >
        by Reenphy
      </Text>
    </HStack>
  );
};

export default Footer;
