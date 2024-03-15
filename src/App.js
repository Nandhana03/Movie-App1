import './App.css';
import {useState} from 'react';
import AddMovie from './Components/AddMovie';
import Login from './Components/Login';
import Register from './Components/Register';
import Portal from './Components/Portal';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import MovieList from './Components/MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MovieDetails from './Components/MovieDetails';
import EditMovie from './Components/EditMovie';
import {Routes,Route} from "react-router-dom";

function App() {

  const [mode,setMode]=useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // const lightTheme = createTheme({
  //   palette: {
  //     mode: 'light',
  //     // Define other light mode palette options if needed
  //   },
  // });

  return(
    <div>
      <ThemeProvider theme={darkTheme}>
        <Paper style={{minHeight:"100vh", borderRadius:"0%"}} elevation={9}>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
          <Route path="home" element={<Home />}/>
          <Route path="addmovie" element={<AddMovie/>}/>
          <Route path="movie" element={<MovieList/>}/>
          <Route path="edit/:id" element={<EditMovie/>}/>
          <Route path="view/:id" element={<MovieDetails />}/>
        </Route>
        
        <Route path="*" element={<NotFound />}/>
      </Routes>
      {/* <AddMovie /> */}
      {/* <Register/> */}
      </Paper>
      </ThemeProvider>
  </div>
  )
}

export default App;
//flexboxfroggy