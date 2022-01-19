import NavBar from "./NavBar";
import { Box, Container } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      <Box xs={{ flexGrow: 1 }}>
        <NavBar setTheme={""}></NavBar>
      </Box>
      <main className="">
        <Container disableGutters={false} maxWidth="xl">
          {children}
        </Container>
      </main>
    </>
  );
}

export default Layout;
