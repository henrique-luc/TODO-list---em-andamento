import {
  Button,
  Center,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaClipboard, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useState } from "react";

interface ModalCreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TaskData {
  title: string;
}

export const ModalCreateTask = ({ isOpen, onClose }: ModalCreateTaskProps) => {
  const createTaskSchema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TaskData>({ resolver: yupResolver(createTaskSchema) });

  const handleCreateTask = (data: TaskData) => console.log(data);

  const [value, setValue] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleCreateTask)}
        padding="2"
        bg="white"
        color="gray.800"
      >
        <ModalHeader display="flex">
          <Center bg="purple.500" w="30px" h="30px" borderRadius="5px">
            <FaClipboard color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Adicionar
          </Text>
          <Center
            onClick={onClose}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            bg="red.600"
            fontSize="lg"
            borderRadius="md"
          >
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>

        <ModalBody textAlign="center">
          <VStack spacing="5">
            <Input
              type="text"
              id="title"
              isInvalid
              errorBorderColor="red.300"
              placeholder="Digite a tarefa"
              {...register("title")}
              onChangeCapture={(e) => setValue(e.currentTarget.value)}
            />
            {errors.title && (
              <FormErrorMessage color="red.500">
                {errors.title.message}
              </FormErrorMessage>
            )}
          </VStack>
        </ModalBody>

        <ModalFooter flexDirection="column">
          <Button
            type="submit"
            bg="purple.500"
            color="white"
            w="100%"
            h="60px"
            _hover={{ bg: "purple.600" }}
          >
            Adicionar tarefa
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
