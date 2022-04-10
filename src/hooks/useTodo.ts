import { useState } from "react";

export type TodoData = {
  name: string;
  id: number;
};

export const useTodo = (): {
  testData: TodoData[];
  toggleForm: boolean;
  setToggleForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddTodo: (newTodoName: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleUpdateTodo: (changeTodoData: TodoData) => void;
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

  const handleAddTodo = (newTodoName: string) => {
    const makeTodoData: TodoData = {
      name: newTodoName,
      id: testData.length + 1,
    };
    setTodoData((data) => [...data, makeTodoData]);
    setToggleForm(false);
  };

  const handleDeleteTodo = (id: number) => {
    setTodoData(testData.filter((data) => data.id !== id));
  };

  const handleUpdateTodo = (changeTodoData: TodoData) => {
    setTodoData(
      testData.map((data) =>
        data.id === changeTodoData.id ? changeTodoData : data
      )
    );
  };

  return {
    testData,
    toggleForm,
    setToggleForm,
    handleAddTodo,
    handleDeleteTodo,
    handleUpdateTodo,
  };
};