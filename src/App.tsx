import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import TodoControls from "./components/TodoControls";
import TodoList from "./components/TodoList";

interface TodoItem {
  text: string;
  completed: boolean;
}

interface Todo {
  color: string;
  items: TodoItem[];
  inputValue: string;
}

const App: React.FC = () => {
  const [showColorButtons, setShowColorButtons] = useState(false);
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleShowButtons = useCallback(() => {
    setShowColorButtons((prev) => !prev);
  }, []);

  const handleAddTodo = (color: string) => {
    const newTodo: Todo = { color, items: [], inputValue: "" };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setShowColorButtons(false);
  };

  const handleUpdateTodos = (updatedTodos: Todo[]) => {
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <TodoControls
        showColorButtons={showColorButtons}
        onShowButtons={handleShowButtons}
        onAddTodo={handleAddTodo}
      />
      <TodoList todos={todos} onUpdateTodos={handleUpdateTodos} />
    </div>
  );
};

export default App;
