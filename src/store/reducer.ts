import * as actionTypes from "./constants"

const reducerInitialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage", status: "todo"},
    "task-2": { id: "task-2", content: "Watch my favorite show", status: "todo"},
    "task-3": { id: "task-3", content: "Charge my phone", status: "todo"},
    "task-4": { id: "task-4", content: "Cook dinner", status: "completed"},
  },
  tasklists: {
    "tasklist-1": {
      id: "tasklist-1",
      title: "To do",
      taskIds: ["task-1","task-2","task-3","task-4"]
    },
    "tasklist-2": {
      id: "tasklist-2",
      title: "In progress",
      taskIds: []
    },
    "tasklist-3": {
      id: "tasklist-3",
      title: "Done",
      taskIds: []
    }
  },
  tasklistOrder: ["tasklist-1", "tasklist-2","tasklist-3"]
};

const reducer = (preState = reducerInitialData, action: {type: string, data: any}) => {
  const { data, type } = action;
  switch (type) {
    case actionTypes.DRAG_ITEM : 
      return data;
    case actionTypes.DRAG_LIST : 
      return data;
    case actionTypes.DRAG_ITEM_ACROSS_LIST : 
      return data;
    default :
      return preState;
  }
}

export default reducer;
