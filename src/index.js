import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Criando um tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Você pode alterar para a cor que preferir
    },
    secondary: {
      main: '#ff9100', // Você pode alterar para a cor que preferir
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
