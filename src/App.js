import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Todolist from "./components/Todolist";

function App() {
  const [todoList, setTodoList] = useState([]); // array destructing is used here to store the values

  const addTodoHandler = (mytodo) => {
    setTodoList((prevTodoList) => {
      //updating the list by taking the old list and then updating it
      return [...prevTodoList, { name: mytodo, id: Math.random().toString() }]; //first i am copying all elemts from previous users list, spread operator is doing that. and then i have created a new javascript object
    });
  };

  // const removeTodoHandler=(id)=>{
  //   todoList.filter(todo=>todo.id===id)
  //   setTodoList(todoList.filter(todo=>todo.id!==id))
  // }

  return (
    <div>
      {/* //the concept of props is used here in order to flows the data between parent and child component */}
      <Todo onTodo={addTodoHandler} />
      <Todolist
        todos={todoList}
        //delete = { removeTodoHandler}
      />
    </div>
  );
}

export default App;
