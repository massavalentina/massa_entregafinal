import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const addTask = () => {
    if (task === "") {
      setError("La tarea no puede estar vacía");
    } else {
      const newTask = {
        id: tasks.length + 1,
        text: task,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTask("");
      setError("");
    }
  };

  return (
    <div className="TaskFormContainer">
      <form
        className="TaskForm"
        onSubmit={(event) => {
          event.preventDefault();
          addTask();
        }}
      >
        <input
          className="TaskInput"
          type="text"
          name="task"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button className="TaskSubmitButton" type="submit">
          +
        </button>
      </form>

      {error && <p className="TaskError">{error}</p>}
    </div>
  );
};

export default TaskForm;