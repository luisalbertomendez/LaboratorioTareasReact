import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import TaskDetails from './TaskDetails'; // Puedes crear este componente para mostrar detalles de una tarea si es necesario

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* Ruta para la página principal */}
        <Route exact path="/">
          <App />
        </Route>

        {/* Ruta para la página de detalles de la tarea (si es necesario) */}
        <Route path="/task/:taskId">
          <TaskDetails />
        </Route>

        {/* Agrega más rutas según sea necesario para otras páginas */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
