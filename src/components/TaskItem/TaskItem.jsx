import './TaskItem.css';

const TaskItem = ({ task, setTasks, tasks, style }) => {

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };
    return (
       <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap" rel="stylesheet"></link>

      <h2
        className="task"
        onClick={() => toggleComplete(task.id)}
        style={style}
      >
        {task.text}
      </h2>
       </div>
    );
    }

export default TaskItem;