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
  useColorMode,
} from "@chakra-ui/react";
import { FC, useContext, useEffect, useState } from "react";
import { BiSad, BiCodeAlt } from "react-icons/bi";
import Lottie from "lottie-react";
import spinner from "../../public/spinner.json";
import { RequestContext } from "@/contexts/requestContext";
import HomePage from "./homePage";
import ExpeditionsPage from "./expeditionsPage";
import ProjectsPage from "./projectsPage";

const ResponseData: FC = () => {
  const [viewCodeColor, setViewCodeColor] = useState<string>("gray");
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingTime, setLoadingTime] = useState<number>();
  const { payload } = useContext(RequestContext);
  const { method, route } = payload;

  const { colorMode } = useColorMode();

  useEffect(() => {
    let randomDuration: number = Math.floor(Math.random() * 301) + 100;
    method === "GET" ? (randomDuration *= 2) : "";
    setLoadingTime(randomDuration);
    setLoading(true);
    setViewCodeColor("gray");
    const timer = setTimeout(() => {
      setLoading(false);
    }, randomDuration);

    return () => clearTimeout(timer);
  }, [method, route]);

  return (
    <>
      <Flex mt={[14, 14, 14]} ms={2}>
        {loading ? (
          ""
        ) : (
          <HStack spacing={8}>
            <Text
              color={
                method === "GET"
                  ? colorMode === "light"
                    ? "green.50"
                    : "green.75"
                  : colorMode === "light"
                  ? "red.50"
                  : "red.75"
              }
              fontSize="12"
              fontWeight="semibold"
            >
              <Highlight
                query="status:"
                styles={{
                  color: colorMode === "light" ? "black.50" : "gray.300",
                  fontSize: "15",
                }}
              >
                {method === "GET"
                  ? `status: 200 • OK`
                  : `status: 400 • NOT FOUND`}
              </Highlight>
            </Text>
            <Text
              color={
                method === "GET"
                  ? colorMode === "light"
                    ? "green.50"
                    : "green.75"
                  : colorMode === "light"
                  ? "red.50"
                  : "red.75"
              }
              fontSize="12"
              fontWeight="semibold"
            >
              <Highlight
                query="time:"
                styles={{
                  color: colorMode === "light" ? "black.50" : "gray.300",
                  fontSize: "15",
                }}
              >
                {`time: ${loadingTime}ms`}
              </Highlight>
            </Text>
            <Text
              color={colorMode === "light" ? "green.50" : "green.75"}
              fontSize="12"
              fontWeight="semibold"
              display={method !== "GET" ? "none" : "block"}
            >
              {route === "home" ? (
                <Highlight
                  query="size:"
                  styles={{
                    color: colorMode === "light" ? "black.50" : "gray.300",
                    fontSize: "15",
                  }}
                >
                  size: 4.8KB
                </Highlight>
              ) : route === "expeditions" ? (
                <Highlight
                  query="size:"
                  styles={{
                    color: colorMode === "light" ? "black.50" : "gray.300",
                    fontSize: "15",
                  }}
                >
                  size: 38.3KB
                </Highlight>
              ) : (
                <Highlight
                  query="size:"
                  styles={{
                    color: colorMode === "light" ? "black.50" : "gray.300",
                    fontSize: "15",
                  }}
                >
                  size: 12.26KB
                </Highlight>
              )}
            </Text>
          </HStack>
        )}
      </Flex>
      <Card
        mt={1}
        height="fit-content"
        bg={colorMode === "light" ? "white" : "gray.800"}
      >
        <CardBody>
          <Flex mb={2} justify="end">
            <BiCodeAlt
              cursor="pointer"
              color={viewCodeColor}
              onClick={() => {
                method === "GET"
                  ? viewCodeColor === "gray"
                    ? setViewCodeColor(
                        colorMode === "light" ? "#06E938" : "#37C256"
                      )
                    : setViewCodeColor("gray")
                  : "";
              }}
              size="18"
            />
          </Flex>
          <Divider />
          <Container mt={5}>
            {loading ? (
              <Flex h="80" justify="center" alignItems="center">
                <Box w={10}>
                  <Lottie animationData={spinner} loop={true} />
                </Box>
              </Flex>
            ) : route === "home" && method === "GET" ? (
              <HomePage />
            ) : route === "expeditions" && method === "GET" ? (
              <ExpeditionsPage />
            ) : route === "projects" && method === "GET" ? (
              <ProjectsPage />
            ) : (
              <Flex h="80" justify="center" alignItems="center">
                <HStack>
                  <Text
                    color={colorMode === "light" ? "black.50" : "gray.300"}
                    fontSize={["14px", "15px", "16px"]}
                    fontWeight="semibold"
                  >
                    API Not Found
                  </Text>
                  <BiSad />
                </HStack>
              </Flex>
            )}
          </Container>
        </CardBody>
      </Card>
    </>
  );
};

export default ResponseData;
