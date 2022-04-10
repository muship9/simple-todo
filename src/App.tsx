import { Text } from "@chakra-ui/react";
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
      <Text>Hello SimpleTodo</Text>
      {testData.map((data) => (
        <TodoCard name={data.name} id={data.id} />
      ))}
    </>
  );
}

export default App;