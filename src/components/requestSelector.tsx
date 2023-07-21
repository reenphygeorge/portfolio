import { FC, useContext, useState } from "react";
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
import { RequestContext } from "@/contexts/requestContext";
import { ColorContext } from "@/contexts/colorContext";

const RequestSelector: FC = () => {
  const { payload, setPayload } = useContext(RequestContext);
  const { method, route } = payload;
  const { black50, menuItem, black25, white, gray50, unselectedRouteBg } =
    useContext(ColorContext);
  const selectedRouteBg = method === "GET" ? "green.25" : "red.25";

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
            <MenuList bg={white}>
              <MenuItem
                bg={white}
                color={menuItem}
                value="get"
                onClick={() => setPayload({ ...payload, method: "GET" })}
              >
                GET
              </MenuItem>
              <MenuItem
                bg={white}
                color={menuItem}
                value="post"
                onClick={() => setPayload({ ...payload, method: "POST" })}
              >
                POST
              </MenuItem>
              <MenuItem
                bg={white}
                color={menuItem}
                value="put"
                onClick={() => setPayload({ ...payload, method: "PUT" })}
              >
                PUT
              </MenuItem>
              <MenuItem
                bg={white}
                color={menuItem}
                value="patch"
                onClick={() => setPayload({ ...payload, method: "PATCH" })}
              >
                PATCH
              </MenuItem>
              <MenuItem
                bg={white}
                color={menuItem}
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
            bg={black25}
            color={gray50}
            rounded="12px"
            width={["260px", "500px", "500px"]}
            height={"50px"}
            border="none"
            readOnly
          />
        </Flex>
      </FormControl>
      <Flex mt={[8, 10, 10]} ms={2}>
        <Text fontSize={["lg", "xl", "xl"]} color={black50} fontWeight="bold">
          Routes
        </Text>
      </Flex>
      <Flex mt={3}>
        <Box
          width={["80px", "100px", "100px"]}
          height={["35px", "40px", "40px"]}
          bg={route === "home" ? selectedRouteBg : unselectedRouteBg}
          mr="5"
          rounded="full"
          onClick={() => setPayload({ ...payload, route: "home" })}
          cursor="pointer"
        >
          <Text
            userSelect="none"
            textAlign="center"
            color={route === "home" ? "black.50" : "gray.500"}
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
          bg={route === "expeditions" ? selectedRouteBg : unselectedRouteBg}
          mr="5"
          rounded="full"
          onClick={() => setPayload({ ...payload, route: "expeditions" })}
          cursor="pointer"
        >
          <Text
            userSelect="none"
            textAlign="center"
            color={route === "expeditions" ? "black.50" : "gray.500"}
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
          bg={route === "projects" ? selectedRouteBg : unselectedRouteBg}
          rounded="full"
          onClick={() => setPayload({ ...payload, route: "projects" })}
          cursor="pointer"
        >
          <Text
            userSelect="none"
            textAlign="center"
            py={2}
            fontSize={["sm", "md", "md"]}
            color={route === "projects" ? "black.50" : "gray.500"}
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
