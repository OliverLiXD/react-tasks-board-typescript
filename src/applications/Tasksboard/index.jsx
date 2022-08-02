import React from "react";
import TasksboardHeader from "../../components/Tasksboardheader";
import TasksboardBody from "../../components/TasksboardBody";
import "./Taskboard.scss";

function Tasksboard() {
  return (
    <div className="tasksboard">
      <TasksboardHeader></TasksboardHeader>
      <TasksboardBody></TasksboardBody>
    </div>
  )
}

export default Tasksboard;