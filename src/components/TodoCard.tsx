import { Flex, Text, VStack } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  name: string;
  id: string;
};

export const TodoCard: VFC<Props> = ({ name, id }: Props) => {
  return (
    <>
      <Flex w={"300px"} h={"150px"} border={"2px solid #a9a9a9"}>
        <VStack>
          <Text>{name}</Text>
          <Text>{id}</Text>
        </VStack>
      </Flex>
    </>
  );
};