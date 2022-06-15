import { Box, Grid } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { CardTodo } from "../../components/Card/todo";
import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";
import { TaskContext } from "../../contexts/TaskContext";

export const Todo = () => {
  const { usersTodo } = useContext(TaskContext);

  return (
    <Box>
      <Header isTodoPage />
      <SearchBox isTodoPage />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(420px, 1fr))"
        gap={10}
        paddingX="8"
        mt="8"
      >
        {usersTodo.map((todo, id) => (
          <CardTodo todo={todo} key={id} />
        ))}
      </Grid>
    </Box>
  );
};
