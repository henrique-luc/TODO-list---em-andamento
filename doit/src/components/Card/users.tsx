import { Box, Heading, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const CardUsers = ({ user }: any) => {
  const history = useHistory();

  const handleClickUser = () => {
    history.push(`/todo/${user.id}`);
  };

  return (
    <Box
      onClick={() => handleClickUser()}
      cursor="pointer"
      _hover={{ transform: "translateY(-7px)", borderColor: "gray.100" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      borderWidth="1px"
      borderColor="gray.50"
      boxShadow="base"
      padding="7"
      w={["330px", "auto"]}
      id={user.id}
    >
      <Box>
        <Heading as="h1" size="md">
          {user.name}
        </Heading>
        <Heading as="h2" size="sm" color="gray.300" fontStyle="italic">
          {user.username}
        </Heading>
      </Box>
      <Box w="100%" mt="4">
        <Text>
          <strong>Email: </strong>
          {user.email}
        </Text>
        <Text>
          <strong>Website:</strong> {user.website}
        </Text>
      </Box>
    </Box>
  );
};
