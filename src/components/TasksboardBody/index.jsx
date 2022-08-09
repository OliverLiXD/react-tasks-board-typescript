import React from 'react';
import "./TasksboardBody.scss"
import TasksList from '../TasksList';

function TasksboardBody() {

  return (
    <div className="tasksboardbody">
      <TasksList></TasksList>
    </div>
  );
}

export default TasksboardBody;