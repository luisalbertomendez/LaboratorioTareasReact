// reducers.js
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTasks = [...state.tasks, action.payload.taskName];
        localStorage.setItem('tasks', JSON.stringify(newTasks)); // Almacena en localStorage
        return {
          ...state,
          tasks: newTasks,
        };
      case 'REMOVE_TASK':
        const updatedTasks = state.tasks.filter((task) => task !== action.payload.taskName);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Almacena en localStorage
        return {
          ...state,
          tasks: updatedTasks,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  