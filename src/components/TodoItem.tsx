import React from "react";
import "./TodoItem.css";
import { useTodosDispatch, Todo } from "../contexts/TodosContext";
import styled from "styled-components";

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id: todo.id
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id
    });
  };

  return (
    <ListItem className={`TodoItem ${todo.done ? "done" : ""}`}>
      <ItemText className="text" onClick={onToggle}>
        {todo.text}
      </ItemText>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </ListItem>
  );
}

const ListItem = styled.li`
  flex: 1;
  padding: 1em;
  border-bottom: 1px solid #cccccc;
`;

const ItemText = styled.span`
  font-size: 1em;
`;

export default TodoItem;
