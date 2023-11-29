// TaskList.js
import React, { Fragment, useEffect, useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(tasks);
  }, []);
  
  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <Fragment>
      {tasks.length !== 0 && (
      <div className="cartel-1">HAZ CLICK SOBRE LA TAREA PARA TACHARLA!</div>
      )}
      
      <div className="cartel-2">AGREGA UNA TAREA NUEVA!</div>
      <div className="TaskListContainer">
        <h1>Task List</h1>
        <TaskForm tasks={tasks} setTasks={setTasks} />
        
        {tasks.map((task) => (
          <div key={task.id} className="TaskItemContainer">
            <TaskItem
              task={task}
              setTasks={setTasks}
              tasks={tasks}
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
            />
            <div>
              <button
                className="TaskItemDeleteButton"
                onClick={() => handleDeleteTask(task.id)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </Fragment>
  );
};

export default TaskList;