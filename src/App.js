import './App.css';
import { ThemeProvider, createTheme, Paper, Typography, styled, Switch } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { useContext } from 'react';
import { SubContext } from './Contexts/ContextProvider';


function App() {

  const {mode} = useContext(SubContext);

  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="App">
          <RouterProvider router={routes}></RouterProvider>
        </div>
      </Paper>
    </ThemeProvider>

  );
}

export default App;
