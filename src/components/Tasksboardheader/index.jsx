import React from 'react';
import "./TaskboardHeader.scss"

function TasksboardHeader() {
  return (
    <div className="tasksboardheader">
      <div className="tasksboardheaderleft">
        <div className="tasksboardheaderemoji"></div>
        <div className="tasksboardheaderetitle">Main Board</div>
      </div>
      <div className="tasksboardheaderright">
        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
      </div>
    </div>
  );
}

export default TasksboardHeader;