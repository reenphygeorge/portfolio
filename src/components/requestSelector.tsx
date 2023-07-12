import { FC, useState } from "react";
import { Box, Flex, FormControl, Input, Select, Text } from "@chakra-ui/react";

const RequestSelector: FC = () => {
  const [route, setRoute] = useState<string>("home");
  return (
    <>
      <FormControl>
        <Flex>
          <Select
            bg="#272727"
            width={"120px"}
            height={"50px"}
            _hover={{ bg: "#272727" }}
            color="white"
            fontSize={["sm", "md", "md"]}
            rounded="12px"
            fontWeight="bold"
            placeholder="GET"
            border="none"
          >
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="patch">PATCH</option>
            <option value="delete">DELETE</option>
          </Select>
          <Input
            ms={2}
            value={`knowmyip:3000/${route}`}
            fontWeight="normal"
            fontSize={["15", "lg", "lg"]}
            bg="#F0F2F5"
            color="#7A7A7A"
            rounded="12px"
            width={["260px", "500px", "500px"]}
            height={"50px"}
            border="none"
          />
        </Flex>
      </FormControl>
      <Flex mt={[8, 10, 10]} ms={2}>
        <Text fontSize={["lg", "xl", "xl"]} color="#505050" fontWeight="bold">
          Routes
        </Text>
      </Flex>
      <Flex mt={3}>
        <Box
          width={["80px", "100px", "100px"]}
          height={["35px", "40px", "40px"]}
          bg={route === "home" ? "#C1FFDA" : "#F0F2F5"}
          mr="5"
          rounded="full"
          onClick={() => setRoute("home")}
          cursor="pointer"
        >
          <Text
            textAlign="center"
            color="#505050"
            py={2}
            fontSize={["sm", "md", "md"]}
            fontWeight="normal"
          >
            home
          </Text>
        </Box>
        <Box
          width={["120px", "140px", "140px"]}
          height={["35px", "40px", "40px"]}
          bg={route === "explorations" ? "#C1FFDA" : "#F0F2F5"}
          mr="5"
          rounded="full"
          onClick={() => setRoute("explorations")}
          cursor="pointer"
        >
          <Text
            textAlign="center"
            color="#505050"
            py={2}
            fontSize={["sm", "md", "md"]}
            fontWeight="normal"
          >
            explorations
          </Text>
        </Box>
        <Box
          width={["100px", "120px", "120px"]}
          height={["35px", "40px", "40px"]}
          bg={route === "projects" ? "#C1FFDA" : "#F0F2F5"}
          rounded="full"
          onClick={() => setRoute("projects")}
          cursor="pointer"
        >
          <Text
            textAlign="center"
            py={2}
            fontSize={["sm", "md", "md"]}
            color="#505050"
            fontWeight="normal"
          >
            projects
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default RequestSelector;
