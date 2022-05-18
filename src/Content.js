import React from "react";
import styled from "styled-components";
import Clock from "./Clock";
import TodoNew from "./TodoNew"

const Content = () => {
  return <Container>
    <Clock />
    <TodoNew />
  </Container>;
};

const Container = styled.div`
  position: absolute;
  right: 0;
  width: 500px;
  height: 100%;
  color: white;
`;

export default Content;