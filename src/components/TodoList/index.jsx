import React from "react";

import "./TodoList.scss";
import TaskItem from "../TodoItem";

function TodoList() {

  return (
    <div className="todolist">
      <TaskItem></TaskItem>
      <TaskItem></TaskItem>
      <TaskItem></TaskItem>
    </div>
  );
}

export default TodoList;