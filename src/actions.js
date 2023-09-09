// actions.js
export const addTask = (taskName) => ({
    type: 'ADD_TASK',
    payload: {
      taskName,
    },
  });
  
  export const removeTask = (taskName) => ({
    type: 'REMOVE_TASK',
    payload: {
      taskName,
    },
  });
  
  export const setInitialTasks = (tasks) => ({
    type: 'SET_INITIAL_TASKS',
    payload: {
      tasks,
    },
  });
  