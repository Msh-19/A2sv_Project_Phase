import React,{ useState } from "react";
import todoTypes from "../todo";
import TodoService from "../todoService";
import { FaEdit, FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import TodoForm from "./todoForm";
import "../CSS/todoList.css"


const TodoList = () => {
  const [todos, setTodos] = useState<todoTypes[]>(TodoService.getTodos());
  const [editingTodoId, setEditedTodoId] = useState<number | null>(null);

  const [editedTodoText, setEditedTodoText] = useState<string>("");

  const handleEditStart = (id: number, text: string) => {
    setEditedTodoId(id);
    setEditedTodoText(text);
  };

  const handleEditCancel = () => {
    setEditedTodoId(null);
    setEditedTodoText("");
  };

  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      const updateTodo = TodoService.updateTodo({
        id,
        text: editedTodoText,
        completed: false,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updateTodo : todo))
      );
      setEditedTodoId(null);
      setEditedTodoText("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoContainer">
      <div>
        <TodoForm setTodos = {setTodos}/>
      </div>

      {todos.map((todo) => (
        <div className="items" key={todo.id}>
          {editingTodoId === todo.id ? (
            <div className="editedText">
              <input
                type="text"
                value={editedTodoText}
                onChange={(e) => setEditedTodoText(e.target.value)}
                autoFocus={true}
              />
              <button onMouseDown={() => handleEditSave(todo.id)}>
                <FaCheck />
              </button>
              <button
                className="cancelBtn"
                onMouseDown={() => handleEditCancel()}
              >
                <GiCancel />
              </button>
            </div>
          ) : (
            <div className="editBtn">
              <span>{todo.text}</span>
              <button
                onMouseDown={() => {
                  handleEditStart(todo.id, todo.text);
                }}
              >
                <FaEdit />
              </button>
            </div>
          )}
          <button onMouseDown={() => handleDeleteTodo(todo.id)}>
            <RiDeleteBin5Fill />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
