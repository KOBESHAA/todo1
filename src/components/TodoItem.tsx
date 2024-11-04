import React from "react";
import TodoInput from "./TodoInput";
import TodoActions from "./TodoActions";
import { Todo } from "./type";
interface TodoItemProps {
  todo: Todo;
  onUpdateTodo: (updatedTodo: Todo) => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onUpdateTodo,
  onDelete,
}) => {
  const handleAddItem = (text: string) => {
    const updatedItems = [...todo.items, { text, completed: false }];
    onUpdateTodo({ ...todo, items: updatedItems, inputValue: "" });
  };

  const handleToggleComplete = (itemIndex: number) => {
    const updatedItems = [...todo.items];
    updatedItems[itemIndex].completed = !updatedItems[itemIndex].completed;
    onUpdateTodo({ ...todo, items: updatedItems });
  };

  const handleDeleteItem = (itemIndex: number) => {
    const updatedItems = todo.items.filter((_, idx) => idx !== itemIndex);
    onUpdateTodo({ ...todo, items: updatedItems });
  };

  return (
    <div className="todoItem" style={{ backgroundColor: todo.color }}>
      <TodoInput
        value={todo.inputValue}
        onAddItem={handleAddItem}
        onChange={(inputValue) => onUpdateTodo({ ...todo, inputValue })}
      />
      <ul>
        {todo.items.map((item, idx) => (
          <li key={idx} className={item.completed ? "completed" : ""}>
            <span className="todoText">{item.text}</span>
            <TodoActions
              completed={item.completed}
              onToggleComplete={() => handleToggleComplete(idx)}
              onDelete={() => handleDeleteItem(idx)}
            />
          </li>
        ))}
      </ul>
      <button onClick={onDelete} className="deleteTodoButton">
        Delete To-Do
      </button>
    </div>
  );
};

export default TodoItem;
