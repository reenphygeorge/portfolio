import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FC } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      position="fixed"
      width="100vw"
      bg={
        colorMode === "light"
          ? "rgba(255, 255, 255, 0.15)"
          : "rgba(23, 25, 35, 0.15)"
      }
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
