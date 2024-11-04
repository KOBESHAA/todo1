import React from "react";
import TodoItem from "./TodoItem";
interface TodoItemProps {
  text: string;
  completed: boolean;
}

interface TodoProps {
  color: string;
  items: TodoItemProps[];
  inputValue: string;
}

interface TodoListProps {
  todos: TodoProps[];
  onUpdateTodos: (updatedTodos: TodoProps[]) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onUpdateTodos }) => {
  const handleUpdateTodo = (index: number, updatedTodo: TodoProps) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    onUpdateTodos(updatedTodos);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    onUpdateTodos(updatedTodos);
  };

  return (
    <div className="todoListContainer">
      <h2>To-Do List</h2>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onUpdateTodo={(updatedTodo) => handleUpdateTodo(index, updatedTodo)}
          onDelete={() => handleDeleteTodo(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
