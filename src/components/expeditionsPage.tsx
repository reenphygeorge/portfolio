import { HStack, Link, Text } from "@chakra-ui/react";
import { FC, useContext } from "react";
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
  SiJsonwebtokens,
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
import { ColorContext } from "@/contexts/colorContext";

const ExpeditionsPage: FC = () => {
  const { black50 } = useContext(ColorContext);

  return (
    <>
      <HStack>
        <HiMagnifyingGlass size="18px" />
        <Text
          color={black50}
          fontSize={["18px", "20px", "22px"]}
          fontWeight="bold"
        >
          Tech Explored
        </Text>
      </HStack>
      <HStack wrap="wrap" mt={10} spacing={[7, 9, 10]}>
        <Link
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        >
          <AiFillHtml5 size={30} />
        </Link>
        <Link
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        >
          <BiLogoCss3 size={30} />
        </Link>
        <Link
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/javascript"
        >
          <BiLogoJavascript size={30} />
        </Link>
        <Link target="_blank" href="https://getbootstrap.com/">
          <FaBootstrap size={30} />
        </Link>
        <Link target="_blank" href="https://www.typescriptlang.org/">
          <BiLogoTypescript size={30} />
        </Link>
        <Link target="_blank" href="https://tailwindcss.com/">
          <BiLogoTailwindCss size={30} />
        </Link>
        <Link target="_blank" href="https://react.dev/">
          <BiLogoReact size={30} />
        </Link>
        <Link target="_blank" href="https://nextjs.org/">
          <TbBrandNextjs size={30} />
        </Link>
        <Link target="_blank" href="https://chakra-ui.com/">
          <SiChakraui size={30} />
        </Link>
        <Link target="_blank" href="https://firebase.google.com/">
          <SiFirebase size={30} />
        </Link>
        <Link target="_blank" href="https://nodejs.org/">
          <BiLogoNodejs size={30} />
        </Link>
        <Link target="_blank" href="https://expressjs.com/">
          <SiExpress size={30} />
        </Link>
        <Link target="_blank" href="https://nestjs.com/">
          <SiNestjs size={30} />
        </Link>
        <Link target="_blank" href="https://prisma.io/">
          <SiPrisma size={30} />
        </Link>
        <Link target="_blank" href="https://www.docker.com/">
          <FaDocker size={30} />
        </Link>
        <Link target="_blank" href="https://capacitorjs.com/">
          <SiCapacitor size={30} />
        </Link>
        <Link target="_blank" href="https://linux.org/">
          <FaLinux size={30} />
        </Link>
        <Link target="_blank" href="https://jwt.io/">
          <SiJsonwebtokens size={30} />
        </Link>
        <Link target="_blank" href="https://www.python.org/">
          <FaPython size={30} />
        </Link>
        <Link target="_blank" href="https://www.java.com/en/">
          <FaJava size={30} />
        </Link>
        <Link target="_blank" href="https://go.dev">
          <FaGolang size={30} />
        </Link>
        <Link target="_blank" href="https://figma.com">
          <FaFigma size={30} />
        </Link>
        <Link target="_blank" href="https://git-scm.com/">
          <BiLogoGit size={30} />
        </Link>
        <Link target="_blank" href="https://mongodb.com/">
          <BiLogoMongodb size={30} />
        </Link>
        <Link target="_blank" href="https://www.postgresql.org/">
          <BiLogoPostgresql size={30} />
        </Link>
        <Link target="_blank" href="https://www.mysql.com/">
          <TbBrandMysql size={30} />
        </Link>
        <Link target="_blank" href="https://github.com">
          <AiFillGithub size={30} />
        </Link>
      </HStack>
    </>
  );
};

export default ExpeditionsPage;
