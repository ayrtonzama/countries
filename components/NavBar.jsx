import {ColorModeContext} from '../pages/_app'
import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import { useTheme, } from '@mui/material/styles';
import {useContext} from 'react'
export default function NavBar({setTheme}) {
  const theme = useTheme()
console.log(setTheme)
  
  return (
  
    <AppBar className="">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Where in the world? {theme.palette.mode}
        </Typography>
        <Button variant="text" onClick={()=>setTheme} color='primary' >
          {theme.palette.mode == "light" ? "Dark" : "Light"} Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
}
