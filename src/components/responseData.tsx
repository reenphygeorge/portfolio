import Image from "next/image";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Highlight,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import Lottie from "lottie-react";
import spinner from "../../public/spinner.json";
// import wave from "../../public/wave.gif";

const ResponseData: FC = () => {
  const [viewCode, setViewCode] = useState<string>("gray");
  return (
    <>
      <Flex mt={[14, 14, 14]} ms={2}>
        <HStack spacing={8}>
          <Text color="#06E938" fontSize="12" fontWeight="semibold">
            <Highlight
              query="status:"
              styles={{ color: "#505050", fontSize: "15" }}
            >
              status: 200/OK
            </Highlight>
          </Text>
          <Text color="#06E938" fontSize="12" fontWeight="semibold">
            <Highlight
              query="time:"
              styles={{ color: "#505050", fontSize: "15" }}
            >
              time: 200ms
            </Highlight>
          </Text>
          <Text color="#06E938" fontSize="12" fontWeight="semibold">
            <Highlight
              query="size:"
              styles={{ color: "#505050", fontSize: "15" }}
            >
              size: 13.68KB
            </Highlight>
          </Text>
        </HStack>
      </Flex>
      <Card mt={1} height={80}>
        <CardBody>
          <Flex mb={2} justify="end">
            <BiCodeAlt
              cursor="pointer"
              color={viewCode}
              onClick={() => {
                viewCode === "gray"
                  ? setViewCode("#06E938")
                  : setViewCode("gray");
              }}
              size="18"
            />
          </Flex>
          <Divider />
          <Flex h="full" justify="center" alignItems="center">
            {/* <Image src={wave} alt="wave" width={30} height={30} /> */}
            <Box w={10}>
              <Lottie animationData={spinner} loop={true} />
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default ResponseData;
