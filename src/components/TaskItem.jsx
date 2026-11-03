function TaskItem({ task, completeTask, deleteTask }) {

  return (

    <div className="task">

      <span
        className={task.completed ? "completed" : ""}
      >
        {task.title}
      </span>

      <div>

        <button onClick={() => completeTask(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>

      </div>

    </div>

  );
}

export default TaskItem;