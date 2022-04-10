import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { TodoCard } from "./components/TodoCard";

function App() {
  const [testData, setTodoData] = useState([
    {
      name: "First Todo",
      id: "1",
    },
    {
      name: "Second Todo",
      id: "2",
    },
  ]);
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
        </Flex>
        <Flex w={"100%"} h={"100%"} justifyContent={"center"}>
          <Text>add Todo</Text>
        </Flex>
      </VStack>
    </>
  );
}

export default App;