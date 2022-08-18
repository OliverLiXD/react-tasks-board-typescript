import { Draggable } from "react-beautiful-dnd";

import "./TasksList.scss"
import TodoList from "../TodoList";
import CompletedList from "../CompletedList";


function TasksList(props) {
  const { tasks, tasklist, index } = props;
  return (
    <Draggable
      draggableId={tasklist.id}
      index={index}
    >
      {(provided) => {
        return (
          <div className="taskslist"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div className="title"
              {...provided.dragHandleProps}
            >
              <div className="titletext">
                sometitle
              </div>
              <div className="titleicon">
              <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              </div>
            </div>
            <div className="additem"
              // {...provided.draggableProps}
            >
              <svg className="MuiSvgIcon-root MuiSvgIcon-root1" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
              <svg className="MuiSvgIcon-root MuiSvgIcon-root2" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
              <div id="text">Add a task</div>
            </div>
            <TodoList
              tasks={tasks}
              droppableId={tasklist.id}
            ></TodoList>
            <CompletedList
            ></CompletedList>
            {/* <div className="bottombox"></div> */}
          </div>
        )
      }}
    </Draggable>
  );
}

export default TasksList;