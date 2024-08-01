import { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../todoService";
import todoTypes from "../todo";
import "../CSS/todoForm.css"

interface PropTypes {
  setTodos: Dispatch<SetStateAction<todoTypes[]>>;
}

const TodoForm: React.FC<PropTypes> = ({ setTodos }) => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = TodoService.addTodos(newTodoText);
      setTodos((prevTodo) => [...prevTodo, newTodo]);
      setNewTodoText("");
    }
  };
  return (
    <div className="inputForm">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder="Add a task"
      />
      <button onMouseDown={handleAddTodo}>Add Task</button>
    </div>
  );
};

export default TodoForm;
