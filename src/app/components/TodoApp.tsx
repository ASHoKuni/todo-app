"use client"
import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://dummyjson.com/todos");
      const data = await res.json();
      setTodos(data.todos.slice(0, 10));
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), todo: text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 mt-10 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">To-Do List</h2>
      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} filter={filter} />
    </div>
  );
};

export default TodoApp;
