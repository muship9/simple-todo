import { AddIcon } from "@chakra-ui/icons";
import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
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
        <Flex justifyContent={"center"}>
          <HStack>
            <AddIcon w={3} h={3} />
            <Text>add Todo</Text>
          </HStack>
        </Flex>
      </VStack>
    </>
  );
}

export default App;