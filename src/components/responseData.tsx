import {
  Box,
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  HStack,
  Highlight,
  Text,
} from "@chakra-ui/react";
import { FC, ReactElement, useContext, useEffect, useState } from "react";
import { BiSad } from "react-icons/bi";
import { VscServerProcess } from "react-icons/vsc";
import Lottie from "lottie-react";
import spinner from "../../public/spinner.json";
import { RequestContext } from "@/contexts/requestContext";
import HomePage from "./homePage";
import ExpeditionsPage from "./expeditionsPage";
import ProjectsPage from "./projectsPage";
import { ColorContext } from "@/contexts/colorContext";

const ResponseData: FC = () => {
  const [renderColor, setRenderColor] = useState<string>("gray"); // Color for renderIcon
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingTime, setLoadingTime] = useState<number>();

  const { payload } = useContext(RequestContext);
  const { method, route } = payload;
  const { black50, green50, red50, white } = useContext(ColorContext);

  const [currentSize, setCurrentSize] = useState<string>("size: 4.8KB");

  useEffect(() => {
    const randomDuration: number =
      method === "GET"
        ? (Math.floor(Math.random() * 301) + 100) * 2
        : Math.floor(Math.random() * 301) + 100;
    setLoadingTime(randomDuration);
    if (route === "home") {
      setCurrentSize("size: 4.8KB");
    } else if (route === "expeditions") {
      setCurrentSize("size: 38.3KB");
    } else {
      setCurrentSize("size: 12.26KB");
    }
    setLoading(true);
    setRenderColor("gray");
    const timer = setTimeout(() => {
      setLoading(false);
      if (method === "GET") {
        setRenderColor("#37C256");
      } else {
        setRenderColor("gray");
      }
    }, randomDuration);

    return () => clearTimeout(timer);
  }, [method, route]);

  let currentPage: ReactElement;
  if (loading) {
    currentPage = (
      <Flex h="80" justify="center" alignItems="center">
        <Box w={10}>
          <Lottie animationData={spinner} loop={true} />
        </Box>
      </Flex>
    );
  } else {
    if (route === "home" && method === "GET") {
      currentPage = <HomePage />;
    } else if (route === "expeditions" && method === "GET") {
      currentPage = <ExpeditionsPage />;
    } else if (route === "projects" && method === "GET") {
      currentPage = <ProjectsPage />;
    } else {
      currentPage = (
        <Flex h="80" justify="center" alignItems="center">
          <HStack>
            <Text
              color={black50}
              fontSize={["14px", "15px", "16px"]}
              fontWeight="semibold"
            >
              API Not Found
            </Text>
            <BiSad />
          </HStack>
        </Flex>
      );
    }
  }

  return (
    <>
      <Flex mt={[14, 14, 14]} ms={2}>
        {loading ? (
          <Box mt={6}></Box>
        ) : (
          <HStack spacing={8}>
            <Text
              color={method === "GET" ? green50 : red50}
              fontSize="12"
              fontWeight="semibold"
            >
              <Highlight
                query="status:"
                styles={{
                  color: black50,
                  fontSize: "15",
                }}
              >
                {method === "GET"
                  ? `status: 200 • OK`
                  : `status: 400 • NOT FOUND`}
              </Highlight>
            </Text>
            <Text
              color={method === "GET" ? green50 : red50}
              fontSize="12"
              fontWeight="semibold"
            >
              <Highlight
                query="time:"
                styles={{
                  color: black50,
                  fontSize: "15",
                }}
              >
                {`time: ${loadingTime}ms`}
              </Highlight>
            </Text>
            <Text
              color={green50}
              fontSize="12"
              fontWeight="semibold"
              display={method !== "GET" ? "none" : "block"}
            >
              <Highlight
                query="size:"
                styles={{
                  color: black50,
                  fontSize: "15",
                }}
              >
                {currentSize}
              </Highlight>
            </Text>
          </HStack>
        )}
      </Flex>
      <Card mt={1} height="fit-content" bg={white}>
        <CardBody>
          <Flex mb={2} justify="end">
            <VscServerProcess color={renderColor} size="18" />
          </Flex>
          <Divider />
          <Container mt={5}>{currentPage}</Container>
        </CardBody>
      </Card>
    </>
  );
};

export default ResponseData;
