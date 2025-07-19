import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";

const App = () => {
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
    <div className="w-full h-screen flex justify-center items-center">
      <div className="">
        <div className="flex justify-between px-2.5 py-1 text-xl border rounded-xl mb-7">
          <input
            type="text"
            placeholder="Add Todo"
            className="outline-none"
            name="newTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={enterAddTodo}
          />
          <GrAddCircle
            size={30}
            className="text-blue-500 hover:text-blue-400 cursor-pointer duration-150"
            onClick={addTodo}
          />
        </div>
        {todos.length > 0
          ? todos.map((todo, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-5"
              >
                <span className="text-2xl">{todo}</span>
                <RiDeleteBin6Fill
                  size={24}
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => deleteTodo(index)}
                />
              </div>
            ))
          : "No Result Found"}
      </div>
    </div>
  );
};

export default App;
