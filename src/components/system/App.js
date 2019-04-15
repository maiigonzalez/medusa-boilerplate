import React, { Component } from 'react';
import Dashboard from '../pages/Dashboard/Dashboard';
import ErrorBoundary from '../atoms/ErrorBoundary';

class App extends Component {
  render() {
    return (
      // Conexión con API
      // Llamadas a los endpoint de login de la API etc..
      // Routes
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
    );
  }
}

export default App;



