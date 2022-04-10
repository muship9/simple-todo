import { useRef, useState } from "react";

type TodoData = {
  name: string;
  id: number;
};

export const useTodo = (): {
  testData: TodoData[];
  setTodoData: React.Dispatch<React.SetStateAction<TodoData[]>>;
  toggleForm: boolean;
  setToggleForm: React.Dispatch<React.SetStateAction<boolean>>;
  inputValueRef: React.MutableRefObject<string>;
  handleAddTodo: () => void;
} => {
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
  const [toggleForm, setToggleForm] = useState(false);
  const inputValueRef = useRef("");

  const handleAddTodo = () => {
    const makeTodoData: TodoData = {
      name: inputValueRef.current,
      id: testData.length + 1,
    };
    setTodoData((data) => [...data, makeTodoData]);
    setToggleForm(false);
  };
  return {
    testData,
    setTodoData,
    toggleForm,
    setToggleForm,
    inputValueRef,
    handleAddTodo,
  };
};