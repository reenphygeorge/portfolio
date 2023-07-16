import { FC, useContext } from "react";
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
  useColorMode,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import { RequestContext } from "@/contexts/requestContext";

const RequestSelector: FC = () => {
  const { payload, setPayload } = useContext(RequestContext);
  const { method, route } = payload;
  const { colorMode } = useColorMode();

  return (
    <>
      <FormControl>
        <Flex>
          <Menu>
            <MenuButton
              as={Button}
              bg="gray.800"
              _hover={{ bg: "gray.800" }}
              _focus={{ bg: "gray.800" }}
              _active={{ bg: "gray.800" }}
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
            <MenuList bg={colorMode === "light" ? "white" : "gray.800"}>
              <MenuItem
                bg={colorMode === "light" ? "white" : "gray.800"}
                color={colorMode === "light" ? "black.50" : "gray.200"}
                value="get"
                onClick={() => setPayload({ ...payload, method: "GET" })}
              >
                GET
              </MenuItem>
              <MenuItem
                bg={colorMode === "light" ? "white" : "gray.800"}
                color={colorMode === "light" ? "black.50" : "gray.200"}
                value="post"
                onClick={() => setPayload({ ...payload, method: "POST" })}
              >
                POST
              </MenuItem>
              <MenuItem
                bg={colorMode === "light" ? "white" : "gray.800"}
                color={colorMode === "light" ? "black.50" : "gray.200"}
                value="put"
                onClick={() => setPayload({ ...payload, method: "PUT" })}
              >
                PUT
              </MenuItem>
              <MenuItem
                bg={colorMode === "light" ? "white" : "gray.800"}
                color={colorMode === "light" ? "black.50" : "gray.200"}
                value="patch"
                onClick={() => setPayload({ ...payload, method: "PATCH" })}
              >
                PATCH
              </MenuItem>
              <MenuItem
                bg={colorMode === "light" ? "white" : "gray.800"}
                color={colorMode === "light" ? "black.50" : "gray.200"}
                value="delete"
                onClick={() => setPayload({ ...payload, method: "DELETE" })}
              >
                DELETE
              </MenuItem>
            </MenuList>
          </Menu>
          <Input
            ms={2}
            value={`getmyip:3000/${route}`}
            fontWeight="normal"
            fontSize={["15", "lg", "lg"]}
            bg={colorMode === "light" ? "black.25" : "gray.700"}
            color={colorMode === "light" ? "gray.50" : "gray.400"}
            rounded="12px"
            width={["260px", "500px", "500px"]}
            height={"50px"}
            border="none"
            readOnly
          />
        </Flex>
      </FormControl>
      <Flex mt={[8, 10, 10]} ms={2}>
        <Text
          fontSize={["lg", "xl", "xl"]}
          color={colorMode === "light" ? "black.50" : "gray.300"}
          fontWeight="bold"
        >
          Routes
        </Text>
      </Flex>
      <Flex mt={3}>
        <Box
          width={["80px", "100px", "100px"]}
          height={["35px", "40px", "40px"]}
          bg={
            route === "home"
              ? method === "GET"
                ? "green.25"
                : "red.25"
              : colorMode === "light"
              ? "black.25"
              : "gray.700"
          }
          mr="5"
          rounded="full"
          onClick={() => setPayload({ ...payload, route: "home" })}
          cursor="pointer"
        >
          <Text
            userSelect="none"
            textAlign="center"
            color={
              colorMode === "light" || route === "home"
                ? "black.50"
                : "gray.400"
            }
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
          bg={
            route === "expeditions"
              ? method === "GET"
                ? "green.25"
                : "red.25"
              : colorMode === "light"
              ? "black.25"
              : "gray.700"
          }
          mr="5"
          rounded="full"
          onClick={() => setPayload({ ...payload, route: "expeditions" })}
          cursor="pointer"
        >
          <Text
            userSelect="none"
            textAlign="center"
            color={
              colorMode === "light" || route === "expeditions"
                ? "black.50"
                : "gray.400"
            }
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
          bg={
            route === "projects"
              ? method === "GET"
                ? "green.25"
                : "red.25"
              : colorMode === "light"
              ? "black.25"
              : "gray.700"
          }
          rounded="full"
          onClick={() => setPayload({ ...payload, route: "projects" })}
          cursor="pointer"
        >
          <Text
            userSelect="none"
            textAlign="center"
            py={2}
            fontSize={["sm", "md", "md"]}
            color={
              colorMode === "light" || route === "projects"
                ? "black.50"
                : "gray.400"
            }
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
