import React, { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const [enteredTodo, setEnteredTodo] = useState(""); // array destructuring -- we use it because the state return two elements. i am pulling these elements out of that array and storing them in separate constants

  const addTodoHandler = (event) => {
    event.preventDefault();
    props.onTodo(enteredTodo); // forwarding my piece of data i.e. entered Todo. with that i am forwarding the data  to app.js whenever the user clicked on ADD button
    setEnteredTodo(""); // it wil clear the input fields whenever we press ADD button
  };

  const TodoChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  return (
    //when the form is submited, a function is called i.e, addToDoHandler. this fuction prevents the unnecessary relaoding of the page
    <form className="card" onSubmit={addTodoHandler}>
      <label className="label">Your Todo</label>
      <input
        className="input"
        type="text"
        value={enteredTodo}
        onChange={TodoChangeHandler}
      />

      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}

export default Todo;
