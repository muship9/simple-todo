import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  name: string;
  id: string;
  setTodoData: React.Dispatch<
    React.SetStateAction<{ name: string; id: string }[]>
  >;
};

export const TodoCard: VFC<Props> = ({ name, id }: Props) => {
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {name}
            {id}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Edit
            </Button>
            <Button variant="ghost">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};