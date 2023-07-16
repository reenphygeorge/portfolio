import Image from "next/image";
import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Highlight,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FC, useContext, useEffect, useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import Lottie from "lottie-react";
import spinner from "../../public/spinner.json";
import { RequestContext } from "@/contexts/requestContext";
import wave from "../../public/wave.gif";

const ResponseData: FC = () => {
  const [viewCodeColor, setViewCodeColor] = useState<string>("gray");
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingTime, setLoadingTime] = useState<number>();
  const { payload, setPayload } = useContext(RequestContext);
  const { method, route } = payload;

  const { colorMode } = useColorMode();

  useEffect(() => {
    let randomDuration: number = Math.floor(Math.random() * 301) + 100; // Generate a random number between 100 and 300
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
              <Highlight
                query="size:"
                styles={{
                  color: colorMode === "light" ? "black.50" : "gray.300",
                  fontSize: "15",
                }}
              >
                size: 13.68KB
              </Highlight>
            </Text>
          </HStack>
        )}
      </Flex>
      <Card
        mt={1}
        height={80}
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
          <Flex h="full" justify="center" alignItems="center">
            {loading ? (
              <Box w={10}>
                <Lottie animationData={spinner} loop={true} />
              </Box>
            ) : (
              <Image src={wave} alt="wave" width={30} height={30} />
            )}
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default ResponseData;
