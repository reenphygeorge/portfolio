import {
  Avatar,
  Box,
  Container,
  HStack,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FC } from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const PageHome: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Container mt={5}>
      <HStack>
        <Avatar
          name="Reenphy George"
          src="https://res.cloudinary.com/rxg/image/upload/v1689587189/portfolio/reenphy_yomzbw.gif"
          size="md"
        />
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          fontSize="15px"
          fontWeight="bold"
        >
          Reenphy George
        </Text>
      </HStack>
      <Box mt={5}>
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          fontSize="15px"
          fontWeight="semibold"
        >
          A full stack dev from India. Currently learning Golang and
          building&nbsp;
          <Link
            color={colorMode === "light" ? "green.50" : "green.75"}
            href="https://github.com/DarkPhoenix2704/fossfolio"
          >
            fossfolio
          </Link>
        </Text>
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          mt={3}
          fontSize="15px"
          fontWeight="semibold"
        >
          Love the ideology of FOSS and I do contribute during my free time.
        </Text>
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          mt={3}
          fontSize="15px"
          fontWeight="semibold"
        >
          I love solving problems which I find interesting. Hence I tagline
          myself:
        </Text>
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          mt={2}
          fontSize="15px"
          fontWeight="black"
        >
          Building Products; Solving Problems
        </Text>
        <HStack spacing={5} mt={5}>
          <Link href="https://github.com/reenphygeorge" fontWeight="bold">
            <AiOutlineGithub size={23} />
          </Link>
          <Link href="https://twitter.com/reenphygeorge" fontWeight="bold">
            <AiOutlineTwitter size={23} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/reenphygeorge/"
            fontWeight="bold"
          >
            <BiLogoLinkedin size={23} />
          </Link>
          <Link href="mailto:reenphygeorge@gmail.com" fontWeight="bold">
            <AiOutlineMail size={23} />
          </Link>
        </HStack>
      </Box>
    </Container>
  );
};

export default PageHome;
