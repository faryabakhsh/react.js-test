import React from "react";
import "./Todo.css";

function Todolist(props) {
  return (
    <ul className="card">
      {props.todos.map((todo) => (
        <div key={todo.id} className="li">
          {todo.name}

          {/* this button is non functional, as I am rather not sure how to pass the data/id between the components in order to acces the data/id and then delete it. i am working on it, once i am done i will be demonstrating it in the live demo. */}
          <div className="delete">
            <button
              onClick={() => {
                console.log("clicked");
              }}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Todolist;
