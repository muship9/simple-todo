import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { TodoCard } from "./components/TodoCard";
import { useTodo } from "./hooks/useTodo";

type TodoData = {
  name: string;
  id: number;
};

function App() {
  const {
    testData,
    toggleForm,
    setToggleForm,
    handleAddTodo,
    handleDeleteTodo,
    handleUpdateTodo,
  } = useTodo();

  const inputValueRef = useRef("");

  return (
    <>
      <VStack spacing={5} h={"100vh"} w={"100vw"}>
        <Heading size={"xl"} textAlign={"center"} mt={"5%"}>
          Hello SimpleTodo
        </Heading>
        <Flex justifyContent={"center"} flexFlow={"column"}>
          {testData.map((data) => (
            <TodoCard
              name={data.name}
              id={data.id}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          ))}
          <HStack
            onClick={() => setToggleForm(!toggleForm)}
            _hover={{
              cursor: "pointer",
            }}
          >
            <AddIcon w={3} h={3} />
            <Text>add Todo</Text>
          </HStack>
          {toggleForm && (
            <>
              <VStack>
                <Input
                  placeholder="Todo Name"
                  size="md"
                  mt={"5px"}
                  onChange={(e) => (inputValueRef.current = e.target.value)}
                />
                <Button
                  w={"40%"}
                  onClick={() => handleAddTodo(inputValueRef.current)}
                >
                  Create
                </Button>
              </VStack>
            </>
          )}
        </Flex>
      </VStack>
    </>
  );
}

export default App;