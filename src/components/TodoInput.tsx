import React, { useState } from "react";

interface TodoInputProps {
  value: string;
  onAddItem: (text: string) => void;
  onChange: (value: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({
  value,
  onAddItem,
  onChange,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim() !== "") {
      onAddItem(value.trim());
    }
  };

  return (
    <input
      type="text"
      placeholder="Add a new task and press Enter"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      className="todoInput"
    />
  );
};

export default TodoInput;
