import React, { useState } from "react";
import Todo from "./Todo";

const TodoForm = () => {
  const [todos, setTodos] = useState([
    "Studying Javascript",
    "Studying React",
    "Coding or Programming",
    "Making a coffe",
    "Making a food",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  const addTodo = () => {
    if (newTodo !== "") {
      const updatedTodo = [...todos];
      updatedTodo.push(newTodo);
      setTodos(updatedTodo);

      setNewTodo("");
    } else {
      alert("Please Filled!");
    }
  };
  const enterAddTodo = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return (
    <div>
      <Todo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        enterAddTodo={enterAddTodo}
        addTodo={addTodo}
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoForm;
