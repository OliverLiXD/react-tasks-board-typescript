import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

import "./TasksboardBody.scss"
import TasksList from '../TasksList';
import { dragItemAction, dragListAction, dragItemAcrossListAction } from "../../store/actionCreators";


function TasksboardBody(props) {
  const { listsData } = props;
  const { tasks, tasklists, tasklistOrder } = listsData;
  const { dragItem, dragList, dragItemAcrossList } = props;

  function onDragEnd(result) {
    const {destination, source, draggableId, type } = result;

    if(!destination) {
      return ;
    }
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return ;
    }

    if(type === "tasklists") {
      const newTasklistOrder = Array.from(tasklistOrder);

      newTasklistOrder.splice(source.index, 1);
      newTasklistOrder.splice(destination.index, 0, draggableId);

      const newData = {
        ...listsData,
        tasklistOrder: newTasklistOrder
      }

      dragList(newData);
      return ;
    }

    const start = tasklists[source.droppableId].id;
    const startList = tasklists[source.droppableId];
    const finish = tasklists[destination.droppableId].id;
    const finishList = tasklists[destination.droppableId];

    if(start === finish) {
      const newTaskIds = Array.from(tasklists[start].taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newData = {
        ...listsData,
        tasklists: {
          ...tasklists,
          [destination.droppableId]: {
            ...startList,
            taskIds: newTaskIds
          }
        }
      }
      dragItem(newData);
      return ;
    }

    const newSourceTaskIds = Array.from(tasklists[start].taskIds);
    const newDestinationTaskIds = Array.from(tasklists[finish].taskIds);

    newSourceTaskIds.splice(source.index, 1);
    newDestinationTaskIds.splice(destination.index, 0, draggableId);

    const newData = {
      ...listsData,
      tasklists: {
        ...tasklists,
        [destination.droppableId]: {
          ...finishList,
          taskIds: newDestinationTaskIds,
        },
        [source.droppableId]: {
          ...startList,
          taskIds: newSourceTaskIds,
        }
      }
    }

    dragItemAcrossList(newData);

  }

  return (
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable
          droppableId="uniqueID"
          direction="horizontal"
          type="tasklists"
        >
          {(provided) => {
            return (
              <div className="tasksboardbody"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {
                  tasklistOrder.map((tasklistId, index) => {
                    const tasklist = tasklists[tasklistId];
                    const listtasks = tasklist.taskIds.map((taskId) => {
                      return tasks[taskId];
                    })
                    return (
                      <TasksList
                        tasklist={tasklists[tasklistId]}
                        tasks={listtasks}
                        index={index}
                        key={tasklistId}
                      ></TasksList>
                    )
                  })
                }
                {provided.placeholder}
              </div>
            )
          }}
        </Droppable>
      </DragDropContext>
  );
}

const mapStateToProps = (state) => {
  return {
    listsData: state
  }
}

const mapDispatchToProps = {
  dragItem: dragItemAction,
  dragList: dragListAction,
  dragItemAcrossList: dragItemAcrossListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TasksboardBody));