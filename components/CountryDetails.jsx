import {Typography } from "@mui/material";
function CountryDetails({ title, value }) {
  return (
    <Typography variant="body1" sx={{ paddingTop: "1rem" }}>
      <strong>{title}: </strong> {value}
    </Typography>
  );
}

export default CountryDetails;
