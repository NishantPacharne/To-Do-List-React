import React from "react";

const TodoItem = (props) => {
  return (
    <div className="bg-gray-100 rounded flex justify-between p-4 h-12 mb-6 items-center m-auto">
      <span className="title-font font-medium">{props.todo.title}</span>
      <div className="flex gap-4">
        <a href="#" onClick={() => {props.onDelete(props.todo)}}>
          <box-icon name="check-circle"></box-icon>
        </a>
        <a href="#" onClick={() => {props.onDelete(props.todo)}}>
          <box-icon name="x"></box-icon>
        </a>
      </div>
    </div>
  );
};

export default TodoItem;
