import React from "react";
import Task from "./Task";

function TaskList({tasks, removeTask}) {
  return (
    <div className="tasks">
      {tasks.map((task) => (<Task key={tasks.text} 
        text={task.text}
        category={task.category} 
        removeTask={removeTask}
        />))
      }
    </div>
  );
}

export default TaskList;
