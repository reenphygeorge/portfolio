import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Navbar = () => (
  <Box
    position="fixed"
    width="100vw"
    bg="rgba(255, 255, 255, 0.15)"
    backdropFilter="blur(5px)"
    zIndex={100}
  >
    <Container pt="20px" pb="10px" maxW="7xl">
      <Flex align="center">
        <Text userSelect="none" fontSize="35px" fontWeight="black">
          R
        </Text>
        <Text userSelect="none" pt={4} fontSize="10px" fontWeight="bold">
          client
        </Text>
      </Flex>
    </Container>
  </Box>
);

export default Navbar;
