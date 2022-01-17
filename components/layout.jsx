import NavBar from "./NavBar";
import { Box, Container } from "@mui/material";
export default function Layout({ children,mode ,}) {
  return (
    <>
      <Box xs={{ flexGrow: 1 }}>
        <NavBar></NavBar>
      </Box>
      <main className="">
        <Container disableGutters={false} maxWidth="xl">
          {children}
        </Container>
      </main>
    </>
  );
}
