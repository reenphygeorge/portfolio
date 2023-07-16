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
} from "@chakra-ui/react";
import { FC, useContext, useEffect, useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import Lottie from "lottie-react";
import spinner from "../../public/spinner.json";
import { RequestContext } from "@/contexts/requestContext";
import wave from "../../public/wave.gif";

const ResponseData: FC = () => {
  const [viewCode, setViewCode] = useState<string>("gray");
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingTime, setLoadingTime] = useState<number>();
  const { payload, setPayload } = useContext(RequestContext);

  const { method, route } = payload;

  useEffect(() => {
    let randomDuration: number = Math.floor(Math.random() * 301) + 100; // Generate a random number between 100 and 300
    method === "GET" ? (randomDuration *= 2) : "";
    setLoadingTime(randomDuration);
    setLoading(true);
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
              color={method === "GET" ? "#06E938" : "red"}
              fontSize="12"
              fontWeight="semibold"
            >
              <Highlight
                query="status:"
                styles={{ color: "#505050", fontSize: "15" }}
              >
                {method === "GET"
                  ? `status: 200 • OK`
                  : `status: 400 • NOT FOUND`}
              </Highlight>
            </Text>
            <Text
              color={method === "GET" ? "#06E938" : "red"}
              fontSize="12"
              fontWeight="semibold"
            >
              <Highlight
                query="time:"
                styles={{ color: "#505050", fontSize: "15" }}
              >
                {`time: ${loadingTime}ms`}
              </Highlight>
            </Text>
            <Text
              color="#06E938"
              fontSize="12"
              fontWeight="semibold"
              display={method !== "GET" ? "none" : "block"}
            >
              <Highlight
                query="size:"
                styles={{ color: "#505050", fontSize: "15" }}
              >
                size: 13.68KB
              </Highlight>
            </Text>
          </HStack>
        )}
      </Flex>
      <Card mt={1} height={80}>
        <CardBody>
          <Flex mb={2} justify="end">
            <BiCodeAlt
              cursor="pointer"
              color={viewCode}
              onClick={() => {
                method === "GET"
                  ? viewCode === "gray"
                    ? setViewCode("#06E938")
                    : setViewCode("gray")
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
