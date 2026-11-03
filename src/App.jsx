import { useState, useEffect } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import UserList from "./components/UserList";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  // Add Task
  const addTask = (taskName) => {

    const newTask = {
      id: Date.now(),
      title: taskName,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  // Complete Task
  const completeTask = (id) => {

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {

    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  // Fetch Users API
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => response.json())

      .then((data) => {
        setUsers(data);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, []);

  return (
    <div className="container">

      <h1>Student Task Manager</h1>

      <p>Manage your daily study tasks</p>

      <TaskForm addTask={addTask} />

      <h2>My Tasks</h2>

      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />

      <h2>Students / Users</h2>

      <UserList
        users={users}
        loading={loading}
      />

    </div>
  );
}

export default App;