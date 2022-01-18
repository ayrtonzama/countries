
import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import {  useThemeUpdate } from '../hooks/ThemeContext';
export default function NavBar() {
  const theme=useTheme()
  const themeToggle=useThemeUpdate()

  
  return (
  
    <AppBar className="">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Where in the world?
        </Typography>
        <Button variant="text" onClick={themeToggle} color='primary' >
          {theme.palette.mode == "light" ? "Dark" : "Light"} Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
}
