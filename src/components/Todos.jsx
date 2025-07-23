import React, { useEffect, useState } from "react";

// components & store
import todosStore from "../store/todosStore";
import themeStore from "../store/themeStore";
import EditTodo from "./EditTodo";

// react icons
import {
  MdOutlineLightMode,
  MdDarkMode,
  MdOutlineModeEdit,
  MdOutlineDeleteForever,
} from "react-icons/md";
import { BsDatabaseAdd } from "react-icons/bs";

const Todos = () => {
  const { isDark, toggleTheme } = themeStore();
  const { todos, addTodo, deleteTodo, editTodo } = todosStore();
  const [textTodo, setTextTodo] = useState("");
  const [editWarning, setEditWarning] = useState("");
  const [editModal, setEditModal] = useState(0);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addText = () => {
    if (textTodo.length === 0) {
      alert("Don't leave blank to add todo.");
    } else {
      addTodo(textTodo);
      setTextTodo("");
    }
  };
  const enterAdd = (e) => {
    if (e.key === "Enter") addText();
  };
  const editText = (index) => {
    if (textTodo.trim() === "") {
      setEditWarning("Filled to edit");
      return;
    } else {
      editTodo(index, textTodo);
      setTextTodo("");
    }
  };

  return (
    <div
      className={
        isDark
          ? "w-full bg-white text-black duration-150 h-screen"
          : "w-full bg-black text-white duration-150 h-screen"
      }
    >
      <div
        className={
          isDark
            ? "py-3 px-10 flex justify-between items-center bg-black text-white"
            : "py-3 px-10 flex justify-between items-center bg-white text-black"
        }
      >
        <span className="block text-5xl">Todo List Challenge</span>

        {isDark ? (
          <MdDarkMode
            size={25}
            className="duration-75 hover:scale-110 cursor-pointer"
            onClick={toggleTheme}
          />
        ) : (
          <MdOutlineLightMode
            size={25}
            className="duration-75 hover:scale-110 cursor-pointer"
            onClick={toggleTheme}
          />
        )}
      </div>

      <EditTodo
        editText={editText}
        setTextTodo={setTextTodo}
        textTodo={textTodo}
        editModal={editModal}
        editWarning={editWarning}
      />

      <div className="flex justify-center">
        <div
          className={`w-fit my-10 px-3 py-1 text-lg border rounded-xl flex justify-between items-center gap-3
            ${isDark ? "" : "bg-white text-black"}`}
        >
          <input
            type="text"
            className="outline-none"
            placeholder="Add Todo"
            name="todo"
            value={textTodo}
            onChange={(e) => setTextTodo(e.target.value)}
            onKeyDown={enterAdd}
          />
          <BsDatabaseAdd
            size={25}
            className="hover:scale-105 cursor-pointer duration-150"
            onClick={addText}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <table
          className={`w-[45.25rem] border border-collapse border-green-400
            ${isDark ? " text-black" : "text-white"}`}
        >
          <thead>
            <tr className={isDark ? "bg-green-200" : "bg-green-700"}>
              <th className="px-3 py-1.5 border">No.</th>
              <th className="px-3 py-1.5 border">Todo</th>
              <th className="px-3 py-1.5 border">Icon</th>
            </tr>
          </thead>
          <tbody>
            {todos.length === 0 ? (
              <tr>
                <td className="text-center p-4" colSpan="4">
                  No Data Found
                </td>
              </tr>
            ) : (
              todos.map((todo, index) => (
                <tr key={index}>
                  <td className="px-3 py-1.5 border">{index + 1}</td>
                  <td className="px-3 py-1.5 border text-center">{todo}</td>
                  <td className=" border flex justify-center">
                    <MdOutlineModeEdit
                      size={25}
                      className="hover:scale-110 duration-150 cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#editTodo"
                      onClick={() => {
                        setEditModal(index);
                        setTextTodo(todos[index]);
                      }}
                    />
                  </td>
                  <td className=" border flex justify-center">
                    <MdOutlineDeleteForever
                      size={25}
                      className="hover:scale-110 duration-150 cursor-pointer"
                      onClick={() => deleteTodo(index)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
