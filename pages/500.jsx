import { Container,Typography } from "@mui/material";

export default function Custom404() {
    return (<Container sx={{margin:'auto',marginTop:'4rem'}}>
      <div className="center-content">

      <Typography variant="h1" align="center">500</Typography>
      <Typography variant="h2" align="center">Oops something went wrong!</Typography>
      </div>
    </Container>)
  }