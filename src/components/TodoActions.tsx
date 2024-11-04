import React from "react";

interface TodoActionsProps {
  completed: boolean;
  onToggleComplete: () => void;
  onDelete: () => void;
}

const TodoActions: React.FC<TodoActionsProps> = ({
  completed,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <div className="buttonGroup">
      <button onClick={onToggleComplete} className="completeButton">
        {completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
      <button onClick={onDelete} className="deleteButton">
        Delete
      </button>
    </div>
  );
};

export default TodoActions;
