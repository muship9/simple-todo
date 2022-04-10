import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { TodoCard } from "./components/TodoCard";

function App() {
  const [testData] = useState([
    {
      name: "Test Todo",
      id: "fjsl;fgjasl",
    },
  ]);
  return (
    <>
      <VStack spacing={5} h={"100vh"} w={"100vw"}>
        <Heading size={"xl"} textAlign={"center"} mt={"5%"}>
          Hello SimpleTodo
        </Heading>
        <Flex w={"100%"} h={"100%"} justifyContent={"center"}>
          {testData.map((data) => (
            <TodoCard name={data.name} id={data.id} />
          ))}
        </Flex>
      </VStack>
    </>
  );
}

export default App;