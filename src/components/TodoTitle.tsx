import React from "react";
import styled from "styled-components";

function TodoTitle() {
  return (
    <Container>
      <Title>흔하디 흔한 오늘 할 일</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  background-color: #0c093c;
  border-radius: 4px;
`;

const Title = styled.p`
  font-size: 36px;
  color: white;
`;
export default TodoTitle;
