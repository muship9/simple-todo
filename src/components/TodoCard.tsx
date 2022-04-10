import { Flex, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { VFC } from "react";
import { BaseModal } from "./BaseModal";

type Props = {
  name: string;
  id: number;
  setTodoData: React.Dispatch<
    React.SetStateAction<{ name: string; id: number }[]>
  >;
};

export const TodoCard: VFC<Props> = ({ name, id, setTodoData }: Props) => {
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
        setTodoData={setTodoData}
      />
    </>
  );
};