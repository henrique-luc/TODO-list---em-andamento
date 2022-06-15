import { Box, Center, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { FaCheck, FaClock } from "react-icons/fa";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";

export const CardTodo = ({ todo }: any) => {
  useEffect(() => {
    api
      .put(`users/todos/${todo.id}`)
      .then((response: AxiosResponse) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      cursor="pointer"
      _hover={{ transform: "translateY(-7px)", borderColor: "gray.100" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      borderWidth="1px"
      borderColor="gray.50"
      boxShadow="base"
      padding="7"
      bg={todo.completed ? "green" : "yellow"}
      w={["330px", "auto"]}
      id={todo.id}
    >
      <Flex justify="space-between">
        <Heading as="h1" size="md">
          {todo.title}
        </Heading>
        <HStack spacing="4">
          <Center
            as="button"
            w="30px"
            h="30px"
            borderWidth="1px"
            borderRadius="5px"
            borderColor="gray.200"
            bgColor="white"
            _hover={{ bg: "yellow.300", borderColor: "yellow.500" }}
          >
            <FaClock color={theme.colors.gray[300]} />
          </Center>
          <Center
            as="button"
            w="30px"
            h="30px"
            borderWidth="1px"
            borderRadius="5px"
            borderColor="gray.200"
            bgColor="white"
            _hover={{ bg: "green.500", borderColor: "green.500" }}
          >
            <FaCheck color={theme.colors.gray[300]} />
          </Center>
        </HStack>
      </Flex>
    </Box>
  );
};
