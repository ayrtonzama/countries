
import { AppBar, Typography, Button, Toolbar,Container } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import {  useThemeUpdate } from '../hooks/ThemeContext';
export default function NavBar() {
  const theme=useTheme()
  const themeToggle=useThemeUpdate()

  
  return (
  
    <AppBar className="">
        <Container disableGutters={false} maxWidth="xl">
      <Toolbar>

        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          <strong>Where in the world?</strong>
        </Typography>
        <Button 
        startIcon={theme.palette.mode == "light" ?<NightlightRoundIcon/>:<LightModeIcon/>}
        variant="text" onClick={themeToggle}  className={theme.palette.mode+'-text'} id="theme-btn">
          {theme.palette.mode == "light" ? "Dark" : "Light"} Mode
        </Button>
      </Toolbar>
        </Container>
    </AppBar>
  );
}
