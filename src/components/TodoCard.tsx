import { Text } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  name: string;
  id: string;
};

export const TodoCard: VFC<Props> = ({ name, id }: Props) => {
  return (
    <>
      <Text>{name}</Text>
      <Text>{id}</Text>
    </>
  );
};