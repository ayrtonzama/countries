import NavBar from "./NavBar";
import { Box, Container } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeContext";
export default function Layout({ children}) {
  const hook=useContext(ThemeContext)
  
  return (
    <>
      <Box xs={{ flexGrow: 1 }}>
        <NavBar setTheme={hook.toggleColorMode()}></NavBar>
      </Box>
      <main className="">
        <Container disableGutters={false} maxWidth="xl">
          {children}
        </Container>
      </main>
    </>
  );
}
