import TaskItem from "./TaskItem";

function TaskList({ tasks, completeTask, deleteTask }) {

  return (

    <div>

      {tasks.length === 0 ? (

        <p>No tasks added yet!</p>

      ) : (

        tasks.map((task) => (

          <TaskItem
            key={task.id}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />

        ))

      )}

    </div>

  );
}

export default TaskList;