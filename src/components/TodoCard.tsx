import { Flex, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { VFC } from "react";
import { TodoData } from "../hooks/useTodo";
import { BaseModal } from "./BaseModal";

type Props = {
  name: string;
  id: number;
  handleDeleteTodo: (id: number) => void;
  handleUpdateTodo: (changeTodoData: TodoData) => void;
};

export const TodoCard: VFC<Props> = ({
  name,
  id,
  handleDeleteTodo,
  handleUpdateTodo,
}: Props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        w={"300px"}
        h={"150px"}
        border={"2px solid #a9a9a9"}
        m={2}
        onClick={onOpen}
        _hover={{
          cursor: "pointer",
        }}
      >
        <VStack>
          <Text>{name}</Text>
          <Text>{id}</Text>
        </VStack>
      </Flex>
      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        name={name}
        id={id}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </>
  );
};