import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
