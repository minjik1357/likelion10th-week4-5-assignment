import React from "react";
import styled from "styled-components";
import TodoRow from "./TodoRow";

const TodoList = ({ todoList, handleClickRemove }) => (
  <Container>
    {todoList.map((todo, index) => (
      // map() 함수는 todoList 안에 있는 모든 원소를 순차적으로 돌면서 TodoRow 컴포넌트를 반환함.
      <TodoRow
        todo={todo}
        key={index}
        index={index}
        handleClickRemove={handleClickRemove} />
    ))}
  </Container>
);

const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TodoList;