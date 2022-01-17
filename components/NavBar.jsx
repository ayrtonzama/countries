import { AppBar, Typography, Button, Toolbar } from "@mui/material";

export default function NavBar({ mode }) {
  return (
    <AppBar className="">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Where in the world?
        </Typography>
        <Button variant="text" onClick={() => mode}>
          {mode == "light" ? "Dark" : "Light"} Mode
        </Button>
      </Toolbar>
    </AppBar>
  );
}
