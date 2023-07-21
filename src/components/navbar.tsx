import { ColorContext } from "@/contexts/colorContext";
import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FC, useContext } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { navBg } = useContext(ColorContext);
  return (
    <Box
      position="fixed"
      width="100vw"
      bg={navBg}
      backdropFilter="blur(5px)"
      zIndex={100}
    >
      <Container pt="20px" pb="10px" maxW="7xl">
        <HStack justifyContent="space-between">
          <Flex justify="start" align="center">
            <Text userSelect="none" fontSize="35px" fontWeight="black">
              R
            </Text>
            <Text userSelect="none" pt={4} fontSize="10px" fontWeight="bold">
              client
            </Text>
          </Flex>
          {colorMode === "light" ? (
            <BsFillMoonStarsFill cursor="pointer" onClick={toggleColorMode} />
          ) : (
            <BsFillSunFill cursor="pointer" onClick={toggleColorMode} />
          )}
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
