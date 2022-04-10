import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRef, VFC } from "react";
import { TodoData } from "../hooks/useTodo";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  id: number;
  handleDeleteTodo: (id: number) => void;
  handleUpdateTodo: (changeTodoData: TodoData) => void;
};

export const BaseModal: VFC<Props> = ({
  isOpen,
  onClose,
  id,
  handleDeleteTodo,
  handleUpdateTodo,
}: Props) => {
  const inputValueRef = useRef("");

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Todo Name"
              size="md"
              mt={"5px"}
              onChange={(e) => (inputValueRef.current = e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                handleDeleteTodo(id);
                onClose();
              }}
            >
              Delete
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleUpdateTodo({ name: inputValueRef.current, id: id });
                onClose();
              }}
            >
              Edit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};