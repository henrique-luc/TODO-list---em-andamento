import { Flex, Image, Heading, Button, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo-secondary.svg";

export const Header = ({ isTodoPage = false }) => {
  const history = useHistory();

  const BackToUsers = () => {
    history.push("/");
  };

  return (
    <Flex
      borderBottom="1px"
      borderBottomColor="#f5f5f5"
      paddingX="8"
      paddingY="2"
    >
      <Flex align="center" justify="space-between">
        <Image src={Logo} w="70px" />
      </Flex>
      <Center ml="auto">
        {isTodoPage ? (
          <Button
            bg="purple.500"
            color="#fff"
            _hover={{ bg: "purple.800" }}
            onClick={() => BackToUsers()}
          >
            Voltar
          </Button>
        ) : null}
      </Center>
    </Flex>
  );
};
