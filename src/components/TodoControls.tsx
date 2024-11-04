import React from "react";

interface TodoControlsProps {
  showColorButtons: boolean;
  onShowButtons: () => void;
  onAddTodo: (color: string) => void;
}

const TodoControls: React.FC<TodoControlsProps> = ({
  showColorButtons,
  onShowButtons,
  onAddTodo,
}) => {
  const colors = ["red", "blue", "green", "brown"];

  return (
    <div className="todoControls">
      <button onClick={onShowButtons} className="mainButton">
        {showColorButtons ? "Close" : "+"}
      </button>

      {showColorButtons && (
        <div className="buttonContainer">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onAddTodo(color)}
              style={{ backgroundColor: color }}
              className="colorButton"
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoControls;
