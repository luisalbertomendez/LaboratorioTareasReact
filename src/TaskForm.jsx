import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(taskName);
    setTaskName('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Luis Alberto Méndez, 3190-08-21188</h1>
      <h2 style={styles.heading}>Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Nombre de la Tarea:
          <input
            type="text"
            value={taskName}
            onChange={handleInputChange}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '20px',
    marginBottom: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
  },
  input: {
    padding: '8px',
    marginBottom: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (taskName) => dispatch(addTask(taskName)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
