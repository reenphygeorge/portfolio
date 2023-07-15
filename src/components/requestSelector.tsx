import { FC, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { HiChevronDown } from "react-icons/hi";

const RequestSelector: FC = () => {
  const [route, setRoute] = useState<string>("home");
  const [method, setMethod] = useState<string>("GET");
  return (
    <>
      <FormControl>
        <Flex>
          <Menu>
            <MenuButton
              as={Button}
              bg="#272727"
              _hover={{ bg: "#272727" }}
              _focus={{ bg: "#272727" }}
              width={"120px"}
              height={"50px"}
              color="white"
              fontSize={["sm", "md", "md"]}
              rounded="12px"
              fontWeight="bold"
              rightIcon={<HiChevronDown />}
              border="none"
            >
              {method}
            </MenuButton>
            <MenuList>
              <MenuItem value="get" onClick={() => setMethod("GET")}>
                GET
              </MenuItem>
              <MenuItem value="post" onClick={() => setMethod("POST")}>
                POST
              </MenuItem>
              <MenuItem value="put" onClick={() => setMethod("PUT")}>
                PUT
              </MenuItem>
              <MenuItem value="patch" onClick={() => setMethod("PATCH")}>
                PATCH
              </MenuItem>
              <MenuItem value="delete" onClick={() => setMethod("DELETE")}>
                DELETE
              </MenuItem>
            </MenuList>
          </Menu>
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
            readOnly
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
            userSelect="none"
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
          bg={route === "expeditions" ? "#C1FFDA" : "#F0F2F5"}
          mr="5"
          rounded="full"
          onClick={() => setRoute("expeditions")}
          cursor="pointer"
        >
          <Text
            userSelect="none"
            textAlign="center"
            color="#505050"
            py={2}
            fontSize={["sm", "md", "md"]}
            fontWeight="normal"
          >
            expeditions
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
            userSelect="none"
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
