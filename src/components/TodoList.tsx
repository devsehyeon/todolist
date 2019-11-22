import React from "react";
import TodoItem from "./TodoItem";
import { useTodosState } from "../contexts/TodosContext";
import styled from "styled-components";

function TodoList() {
  const todos = useTodosState();

  return (
    <Container>
      <List>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1em;
  margin: 0;
`;

export default TodoList;
