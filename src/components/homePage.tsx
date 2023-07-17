import {
  Avatar,
  Box,
  HStack,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiFileDownloadLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

const HomePage: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Avatar
          name="Reenphy George"
          src="https://res.cloudinary.com/rxg/image/upload/v1689587189/portfolio/reenphy_yomzbw.gif"
          size="md"
        />
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          fontSize={["18px", "20px", "22px"]}
          fontWeight="bold"
        >
          Reenphy George
        </Text>
      </HStack>
      <Box mt={5}>
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="semibold"
        >
          A full stack dev from India. Currently learning Golang and
          building&nbsp;
          <Link
            target="_blank"
            color={colorMode === "light" ? "green.50" : "green.75"}
            href="https://github.com/DarkPhoenix2704/fossfolio"
          >
            fossfolio
          </Link>
        </Text>
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          mt={5}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="semibold"
        >
          Love the ideology of FOSS and I do contribute during my free time.
        </Text>
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          mt={5}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="semibold"
        >
          I love solving problems which I find interesting. Hence I tagline
          myself:
        </Text>
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          mt={4}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="black"
        >
          Building Products; Solving Problems
        </Text>
        <HStack spacing={5} mt={8}>
          <Link
            target="_blank"
            href="https://github.com/reenphygeorge"
            fontWeight="bold"
          >
            <AiOutlineGithub size={23} />
          </Link>
          <Link
            target="_blank"
            href="https://twitter.com/reenphygeorge"
            fontWeight="bold"
          >
            <AiOutlineTwitter size={23} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/reenphygeorge/"
            fontWeight="bold"
          >
            <BiLogoLinkedin size={23} />
          </Link>
          <Link
            target="_blank"
            href="mailto:reenphygeorge@gmail.com"
            fontWeight="bold"
          >
            <MdOutlineMailOutline size={23} />
          </Link>
          <Link
            target="_blank"
            href="/Reenphy.pdf"
            download
            rel="noreferrer"
            fontWeight="bold"
          >
            <RiFileDownloadLine size={23} />
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default HomePage;
