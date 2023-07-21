import { ColorContext } from "@/contexts/colorContext";
import { HStack, Text } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer: FC = () => {
  const { black50 } = useContext(ColorContext);

  return (
    <HStack mt={5} mb={10} justify="center">
      <Text
        textAlign="center"
        color={black50}
        fontSize="12px"
        fontWeight="thin"
      >
        Made with
      </Text>
      <AiFillHeart />
      <Text
        textAlign="center"
        color={black50}
        fontSize="12px"
        fontWeight="thin"
      >
        by Reenphy
      </Text>
    </HStack>
  );
};

export default Footer;
