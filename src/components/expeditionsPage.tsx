import { Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoGit,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import {
  SiFirebase,
  SiChakraui,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiCapacitor,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import {
  FaGolang,
  FaPython,
  FaDocker,
  FaLinux,
  FaFigma,
  FaJava,
} from "react-icons/fa6";
import { TbBrandNextjs, TbBrandMysql } from "react-icons/tb";

const ExpeditionsPage: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <HStack>
        <HiMagnifyingGlass size="18px" />
        <Text
          color={colorMode === "light" ? "black.50" : "gray.300"}
          fontSize="18px"
          fontWeight="bold"
        >
          Tech Explored
        </Text>
      </HStack>
      <HStack wrap="wrap" mt={10} spacing={[8, 9, 10]}>
        <AiFillHtml5 size={30} />
        <BiLogoCss3 size={30} />
        <BiLogoJavascript size={30} />
        <FaBootstrap size={30} />
        <BiLogoTypescript size={30} />
        <BiLogoTailwindCss size={30} />
        <BiLogoReact size={30} />
        <TbBrandNextjs size={30} />
        <SiChakraui size={30} />
        <SiFirebase size={30} />
        <BiLogoNodejs size={30} />
        <SiExpress size={30} />
        <SiNestjs size={30} />
        <SiPrisma size={30} />
        <FaDocker size={30} />
        <SiCapacitor size={30} />
        <FaLinux size={30} />
        <FaPython size={30} />
        <FaJava size={30} />
        <FaGolang size={30} />
        <FaFigma size={30} />
        <BiLogoGit size={30} />
        <BiLogoMongodb size={30} />
        <BiLogoPostgresql size={30} />
        <TbBrandMysql size={30} />
        <AiFillGithub size={30} />
      </HStack>
    </>
  );
};

export default ExpeditionsPage;
