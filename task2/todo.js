"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTodo = function (task) {
        var newTodo = {
            id: this.nextId++,
            task: task,
            completed: false,
        };
        this.todos.push(newTodo);
    };
    TodoList.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoList.prototype.displayTodos = function () {
        console.log("To-Do List:");
        this.todos.forEach(function (todo) {
            console.log("".concat(todo.id, ". [").concat(todo.completed ? 'x' : ' ', "] ").concat(todo.task));
        });
    };
    return TodoList;
}());
exports.TodoList = TodoList;
// Example usage:
var todoList = new TodoList();
todoList.addTodo("Learn TypeScript");
todoList.addTodo("Write a blog post");
todoList.displayTodos();
todoList.removeTodo(1);
todoList.displayTodos();
