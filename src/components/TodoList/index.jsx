import React from "react";
import { Droppable } from "react-beautiful-dnd";

import "./TodoList.scss";
import TaskItem from "../TodoItem";

function TodoList(props) {
  const { tasks, droppableId } = props;

  return (
    <Droppable
      droppableId={droppableId}
    >
      {(provided) => {
        return (
          <div className="todolist"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => {
              return (
                <TaskItem
                 task={task}
                 key={task.id}
                 index={index}
                >
                </TaskItem>
              )
            })}
            {provided.placeholder}
          </div>
        )
      }}
    </Droppable>
  );
}

export default TodoList;