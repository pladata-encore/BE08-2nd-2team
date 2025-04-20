import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/router-config';
import styles from './styles/App.module.scss';

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
