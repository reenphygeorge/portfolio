import { Button, HStack, Link, Text } from "@chakra-ui/react";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { DiGithubAlt, DiNpm } from "react-icons/di";
import { MdOpenInBrowser } from "react-icons/md";
import { ReactElement, useContext, useState } from "react";
import { ColorContext } from "@/contexts/colorContext";
const ProjectsPage = () => {
  const { black50 } = useContext(ColorContext);

  const [page, setPage] = useState<number>(1);

  let projectPage: ReactElement;

  if (page === 1) {
    projectPage = (
      <>
        <Text
          mt={7}
          color={black50}
          fontSize={["16px", "18px", "20px"]}
          fontWeight="bold"
        >
          Smol-Auth
        </Text>
        <Text
          mt={2}
          color={black50}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="medium"
        >
          A smol authentication package with RBAC 🔐
        </Text>
        <HStack mt={2}>
          <Link
            target="_blank"
            href="https://github.com/reenphygeorge/smol-auth"
          >
            <DiGithubAlt size={24} />
          </Link>
          <Link
            target="_blank"
            href="https://www.npmjs.com/package/smol-auth-express"
          >
            <DiNpm size={24} />
          </Link>
        </HStack>
        <Text
          mt={7}
          color={black50}
          fontSize={["16px", "18px", "20px"]}
          fontWeight="bold"
        >
          Servette
        </Text>
        <Text
          mt={2}
          color={black50}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="medium"
        >
          A terminal based open-source live server written in Golang for rapid web development.
        </Text>
        <HStack mt={2}>
          <Link
            target="_blank"
            href="https://github.com/reenphygeorge/servette"
          >
            <DiGithubAlt size={24} />
          </Link>
        </HStack>
        <Text
          mt={5}
          color={black50}
          fontSize={["16px", "18px", "20px"]}
          fontWeight="bold"
        >
          TinkerHub Platform
        </Text>
        <Text
          mt={2}
          color={black50}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="medium"
        >
          Tinkerhub Platform is a community built platform for Tinkers to
          conduct their activities.
        </Text>
        <HStack mt={2} spacing={5}>
          <Link target="_blank" href="https://github.com/tinkerhub/platform">
            <DiGithubAlt size={24} />
          </Link>
          <Link target="_blank" href="https://join.tinkerhub.org">
            <MdOpenInBrowser size={23} />
          </Link>
        </HStack>
      </>
    );
  } else {
    projectPage = (
      <>
        <Text
          mt={7}
          color={black50}
          fontSize={["16px", "18px", "20px"]}
          fontWeight="bold"
        >
          Sjcet Labs
        </Text>
        <Text
          mt={2}
          color={black50}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="medium"
        >
          A software that assists college faculties to maintain and manage the
          laboratory.
        </Text>
        <HStack mt={2}>
          <Link
            target="_blank"
            href="https://github.com/reenphygeorge/sjcet-labs"
          >
            <DiGithubAlt size={24} />
          </Link>
        </HStack>
        <Text
          mt={5}
          color={black50}
          fontSize={["16px", "18px", "20px"]}
          fontWeight="bold"
        >
          Sheets to vcf
        </Text>
        <Text
          mt={2}
          color={black50}
          fontSize={["14px", "15px", "16px"]}
          fontWeight="medium"
        >
          A python script to convert xlsx sheets to VCF with batch renaming
          feature.
        </Text>
        <HStack mt={2}>
          <Link
            target="_blank"
            href="https://github.com/reenphygeorge/sheets-to-vcf"
          >
            <DiGithubAlt size={24} />
          </Link>
        </HStack>
      </>
    );
  }

  return (
    <>
      <HStack>
        <HiOutlineCodeBracketSquare size="18px" />
        <Text
          color={black50}
          fontSize={["18px", "20px", "22px"]}
          fontWeight="black"
        >
          Projects
        </Text>
      </HStack>
      <>{projectPage}</>
      <HStack justify="center" mt={5} spacing={5}>
        <Button w={10} h={10} onClick={() => setPage(1)}>
          <Text fontSize={13}>1</Text>
        </Button>
        <Button w={10} h={10} onClick={() => setPage(2)}>
          <Text fontSize={13}>2</Text>
        </Button>
      </HStack>
    </>
  );
};

export default ProjectsPage;
