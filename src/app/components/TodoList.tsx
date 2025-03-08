import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./TodoApp";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  filter: string;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo, filter }) => {
  const filteredTodos = todos.filter((todo) =>
    filter === "all" ? true : filter === "completed" ? todo.completed : !todo.completed
  );

  return (
    <ul className="space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
