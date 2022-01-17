import { Card, CardMedia, CardContent, Typography } from "@mui/material";
export default function CountryCard({ country }) {
  return (
    <>
      <Card sx={{ flex: 1 }} onClick={()=>{console.log(country.name)}} raised>
        <CardMedia
          component="img"
          height="240"
          image={country.flags.png}
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">{country.name}</Typography>
          <Typography>
            <strong>Population:</strong> {country.population}
          </Typography>
          <Typography>
            <strong>Region:</strong> {country.region}
          </Typography>
          <Typography>
            <strong>Region:</strong> {country.capital}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
