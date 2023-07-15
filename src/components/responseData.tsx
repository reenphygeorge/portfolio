import {
  Card,
  CardBody,
  Flex,
  HStack,
  Highlight,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

const ResponseData: FC = () => {
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
      <Card mt={1}>
        <CardBody>
          <Flex justify="center" align="center" height={80}>
            <Text color="gray.300" fontSize={12}>
              API Content coming soon...
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default ResponseData;
