import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import MenuIcon from '@mui/icons-material/Menu';
//import {LogOut} from "./LogOut";
export default function Topbar({mode,setMode}) {
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("/portal/home")}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/portal/movie")}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate("/portal/addmovie")}>Add Movie</Button>
           <Button style={{marginLeft:"60%"}}
           startIcon={mode==="light" ? <Brightness4Icon /> : <Brightness7Icon/>}
           color="inherit"
           onClick={()=>setMode(mode==="light" ? "dark" : "light")}
           >
            {mode==="light"?"dark":"light"}Mode
           </Button>
          <Button 
          style={{marginLeft:"auto"}}
          color="inherit"
          >LogOut</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}