import React from "react";
import { Todo } from "./TodoApp";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center p-2 border rounded-md bg-gray-100 hover:bg-gray-200">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : "text-black"}`}
      >
        {todo.todo}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
