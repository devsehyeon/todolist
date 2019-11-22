import React, { useState } from "react";
import { useTodosDispatch } from "../contexts/TodosContext";
import styled from "styled-components";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      dispatch({
        type: "CREATE",
        text: value
      });
      setValue("");
    } else {
      alert("할 일을 입력해주세요!");
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          value={value}
          placeholder="할 일을 입력해주세요."
          onChange={e => setValue(e.target.value)}
        />
        <Button>추가</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #0c093c;
`;

const Form = styled.form`
  display: flex;
  padding: 2rem;
`;

const Input = styled.input`
  flex: 1;
  font-size: 1.25rem;
  padding: 0.5em;
  border: none;
  outline: none;
  border-bottom: 1px solid #eeeeee;
`;

const Button = styled.button`
  width: 4rem;
  margin-left: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #0c093c;
  color: white;
  font-size: 1em;
  cursor: pointer;
`;

export default TodoForm;
