import { Button, Center, Flex, Input, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { ModalCreateTask } from "../Modal";

interface SearchData {
  title: string;
}

export const SearchBox = ({ isTodoPage = false }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleSearch = ({ title }: SearchData) => console.log(title);

  const { register, handleSubmit } = useForm<SearchData>();

  return (
    <>
      <ModalCreateTask isOpen={isOpen} onClose={onClose} />

      <Flex
        mt="3"
        w="100%"
        paddingX={["4", "8"]}
        paddingY="2"
        paddingBottom="3"
        borderBottomWidth="1px"
        borderColor="gray.50"
        flexDir={["column", "column", "row"]}
      >
        <Flex as="form" onSubmit={handleSubmit(handleSearch)}>
          <Input
            placeholder={
              isTodoPage
                ? "Pesquise por tarefa"
                : "Pesquise por usuário, empresa"
            }
            _focus={{ bg: "gray.100" }}
            _hover={{ bg: "gray.100" }}
            _placeholder={{ color: "gray.300" }}
            w={["100%", "100%", "35vw"]}
            bg="gray.50"
            {...register("title")}
          />
          <Center
            as="button"
            borderRadius="8px"
            ml="2"
            w="44px"
            h="40px"
            fontSize="2xl"
            bg="purple.600"
          >
            <FaSearch color={theme.colors.white} />
          </Center>
        </Flex>
        {isTodoPage ? (
          <Button
            bg="purple.500"
            color="white"
            paddingX="10"
            ml={["0", "0", "4"]}
            h="40px"
            borderRadius="8px"
            _hover={{ bg: "purple.600" }}
            onClick={onOpen}
            mt={["4", "4", "0"]}
          >
            Adicionar uma nova tarefa
          </Button>
        ) : null}
      </Flex>
    </>
  );
};
