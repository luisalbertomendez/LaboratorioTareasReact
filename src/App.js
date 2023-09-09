import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { TaskListProvider } from './TaskListContext';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = ({ setInitialTasks }) => {
  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
    if (tasksFromLocalStorage) {
      setInitialTasks(tasksFromLocalStorage);
    }
  }, [setInitialTasks]);

  return (
    <div className="App">
      <TaskListProvider>
        <TaskForm />
        <TaskList />
      </TaskListProvider>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setInitialTasks: (tasks) => dispatch({ type: 'SET_INITIAL_TASKS', payload: { tasks } }),
});

export default connect(null, mapDispatchToProps)(App);
