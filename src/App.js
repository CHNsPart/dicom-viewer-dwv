import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue, lime } from '@mui/material/colors';

import './App.css';
import DwvComponent from './DwvComponent';

export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = createTheme({
      typography: {
        useNextVariants: true,
      },
      palette: {
        primary: {
          main: blue[500],
          secondary: blue[100],
          secondaryDark: blue[900]
        },
        secondary: {
          main: lime[500]
        },
        mode: prefersDarkMode ? 'dark' : 'light',
      }
    });

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <DwvComponent />
        </div>
      </ThemeProvider>
    );
}
