import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const ResponseData: FC = () => {
  return (
    <Flex mt={[14, 14, 14]} ms={2}>
      <Text fontSize="md" color="#505050" fontWeight="bold">
        Status
      </Text>
      <Text fontSize="sm" color="#505050" fontWeight="bold">
        200 / OK
      </Text>
    </Flex>
  );
};

export default ResponseData;
