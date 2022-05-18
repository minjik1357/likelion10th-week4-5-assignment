import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

class Todo extends React.Component {
  state = {
    todoList: []
  };
  render() {
    return (
      <Container>
        <Input placeholder="오늘 할 일" onKeyPress={this.handelInputKeyPress}></Input>
        <TodoList todoList={this.state.todoList} handleClickRemove={this.handleClickRemove}>
          {/* TodoNew에서 todoList를 전달 -> TodoList에서 todoList를 받아서 출력 */}
        </TodoList >
      </Container>
    );
  }

  componentDidMount() {
    this.setState({
      todoList: JSON.parse(localStorage.getItem("todoList")) || []
    });
  }

  handelInputKeyPress = event => {
    const {
      target: { value }
    } = event;
    if (event.key === "Enter") {
      this.setState(
        state => ({ todoList: [...state.todoList, value] }),
        () =>
          localStorage.setItem("todoList",
          JSON.stringify(this.state.todoList))
      );
      // this.setState = 비동기로 작동, setState(updater[, callback])
      // ... = spread operator = 펼침 연산자, 특정 객체/배열의 값을 다른 객체/배열로 복제하거나 옮길때 사용
      // state.todoList에 있는 모든 요소를 복제해서 맨 뒤 value값 추가한 배열 줌
      // localStorage에는 문자열만 저장 가능. 데이터를 저장할때는 JSON.stringify(this.state.todoList) 형식으로, 불러올떄는 JSON.parse(this.state.todoList)형식으로 사용하면 됨.
      event.target.value = "";
    }
  };
  handleClickRemove = index => {
    if (window.confirm("목록에서 지우시겠습니까?")) {
      // window.confirm()으로 확인창 만들기.
      // '확인'누르면 true로 삭제되고, '취소'누르면 false로 삭제안됨
      this.setState(
        state => ({
          todoList: [
            ...state.todoList.slice(0, index),
            ...state.todoList.slice(index + 1)
          ]
        }),
        () =>
          localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
      );
    }
  };
}

const Container = styled.div`
  margin-top: 38px;
  text-align: center;
`;

const Input = styled.input`
  width: 50%;
  height: 30px;
  padding: 5px;
  outline: none;
  border: 3px ridge yellow;
  border-radius: 11px;
  background: transparent;
  font-size: 18px;
  color: white;
`;

export default Todo;