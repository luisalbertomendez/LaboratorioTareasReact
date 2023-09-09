import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from './actions';

const TaskList = ({ tasks, removeTask }) => {
  const handleRemoveTask = (taskName) => {
    removeTask(taskName);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Tareas</h2>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            {task}
            <button
              style={styles.button}
              onClick={() => handleRemoveTask(task)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    marginTop: '16px',
  },
  heading: {
    fontSize: '20px',
    marginBottom: '8px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '16px',
    marginBottom: '4px',
  },
  button: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  removeTask: (taskName) => dispatch(removeTask(taskName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
