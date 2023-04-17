import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";
export const Tareas = createContext();

export function TareasProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <Tareas.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </Tareas.Provider>
  );
}
