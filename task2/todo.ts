interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
  }
  
  export class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
  
    addTodo(task: string): void {
      const newTodo: TodoItem = {
        id: this.nextId++,
        task,
        completed: false,
      };
      this.todos.push(newTodo);
    }
  
    removeTodo(id: number): void {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  
    displayTodos(): void {
      console.log("To-Do List:");
      this.todos.forEach(todo => {
        console.log(`${todo.id}. [${todo.completed ? 'x' : ' '}] ${todo.task}`);
      });
    }
  }
  
  // Example usage:
  const todoList = new TodoList();
  todoList.addTodo("Learn TypeScript");
  todoList.addTodo("Write a blog post");
  todoList.displayTodos();
  todoList.removeTodo(1);
  todoList.displayTodos();