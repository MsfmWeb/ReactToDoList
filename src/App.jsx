import React, { useState } from "react";
import "./styles.css";
import InputTodo from "./components/inputTodo";
import IncompleteTodos from "./components/InCompleteTodos";
import CompleteTodos from "./components/CompleteTodos";

const App = () => {
  const [TodoText, setTodoText] = useState("");

  const [inCompleteTodos, setinCompleteTodos] = useState([]);

  const [CompleteList, setCompleteList] = useState([]);

  const onchangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    // alert();
    if (TodoText === "") return;
    const newTodos = [...inCompleteTodos, TodoText];
    setinCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // alert();
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setinCompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...CompleteList, inCompleteTodos[index]];
    setinCompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  // 課題（自分で考えた処理）
  // const onClickBack = (index) => {
  //   const newCompleteTodos = [...CompleteList];
  //   const newIncompleteTodos = [...inCompleteTodos, newCompleteTodos[index]];
  //   newCompleteTodos.splice(index, 1);
  //   setinCompleteTodos(newIncompleteTodos);
  //   setCompleteList(newCompleteTodos);
  // };

  // 授業解答
  const onClickBack = (index) => {
    const newCompleteTodos = [...CompleteList];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...inCompleteTodos, CompleteList[index]];

    setinCompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        TodoText={TodoText}
        onChange={onchangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={CompleteList} onClickBack={onClickBack} />
    </>
  );
};

export default App;
