import React, { createContext, useContext, useState } from 'react';

// Paso 1: Crear un contexto para las tareas.
const TaskListContext = createContext();

// Paso 2: Crear un componente Provider para el contexto de tareas.
export const TaskListProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // Estado para almacenar la lista de tareas.

  const addTask = (taskName) => {
    setTasks([...tasks, taskName]);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // Paso 3: Proporcionar el contexto a través del Provider.
  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskListContext.Provider>
  );
};

// Paso 4: Crear un hook personalizado para acceder al contexto.
export const useTaskList = () => {
  return useContext(TaskListContext);
};
