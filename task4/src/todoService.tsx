import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {
  // getting Tasks
  getTodos: (): TodoTypes[] => {
    const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todoStr ? JSON.parse(todoStr) : [];
  },

  // adding Tasks
  addTodos: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };

    const updateTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));

    return newTodo;
  },

  // updateing the tasks
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = TodoService.getTodos();

    const updateTodos = todos.map((t) => (todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return todo;
  },
  // delete tasks
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();
    const updateTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
  },
};

export default TodoService;