import { Avatar, Box, HStack, Link, Text } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiFileDownloadLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { ColorContext } from "@/contexts/colorContext";

const HomePage: FC = () => {
  const { black50, green50 } = useContext(ColorContext);

  return (
    <>
      <HStack>
        <Avatar
          name="Reenphy George"
          src="https://res.cloudinary.com/rxg/image/upload/v1689587189/portfolio/reenphy_yomzbw.gif"
          size="md"
        />
        <Text
          color={black50}
          fontSize={["18px", "20px", "22px"]}
          fontWeight="bold"
        >
          Reenphy George
        </Text>
      </HStack>
      <Box mt={5}>
        <Text
          color={black50}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="semibold"
        >
          Ex-Intern at&nbsp;
          <Link
            target="_blank"
            color={green50}
            href="https://nocodb.com"
          >
            NocoDB
          </Link>
          &nbsp;| Full stack dev | Currently building&nbsp;
          <Link
            target="_blank"
            color={green50}
            href="https://github.com/reenphygeorge/vPrompt"
          >
            vPrompt
          </Link>
        </Text>
        <Text
          color={black50}
          mt={5}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="semibold"
        >
          Love the ideology of FOSS and I do contribute during my free time.
        </Text>
        <Text
          color={black50}
          mt={5}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="semibold"
        >
          I love solving problems which I find interesting. Hence I tagline
          myself:
        </Text>
        <Text
          color={black50}
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
            href="/resume.pdf"
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
