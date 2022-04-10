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
import { useRef, useState } from "react";
import { TodoCard } from "./components/TodoCard";

type TodoData = {
  name: string;
  id: number;
};

function App() {
  const [toggleForm, setToggleForm] = useState(false);

  const inputValue = useRef("");

  // 一旦仮データを作成して動作を確認する
  const [testData, setTodoData] = useState<TodoData[]>([
    {
      name: "First Todo",
      id: 0,
    },
    {
      name: "Second Todo",
      id: 1,
    },
  ]);

  const handleAddTodo = () => {
    const makeTodoData: TodoData = {
      name: inputValue.current,
      id: testData.length + 1,
    };
    setTodoData((data) => [...data, makeTodoData]);
    setToggleForm(false);
  };

  return (
    <>
      <VStack spacing={5} h={"100vh"} w={"100vw"}>
        <Heading size={"xl"} textAlign={"center"} mt={"5%"}>
          Hello SimpleTodo
        </Heading>
        <Flex justifyContent={"center"} flexFlow={"column"}>
          {testData.map((data) => (
            <TodoCard name={data.name} id={data.id} setTodoData={setTodoData} />
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
                  onChange={(e) => (inputValue.current = e.target.value)}
                />
                <Button w={"40%"} onClick={handleAddTodo}>
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