import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "next/link";
export default function CountryCard({ country }) {
  return (
    <>
      <Link href={"/country/" + country.name} >
        <Card
        elevation={2}
          sx={{ flex: 1,height:'100%' }}
          className="link-styles"
          raised
        >
          <CardMedia
            component="img"
            height="240"
            alt={country.name}
            image={country.flag}
          ></CardMedia>
          <CardContent>
            <Typography variant="h5">{country.name}</Typography>
            <br/>
            <Typography>
              <strong>Population:</strong> {country.population.toLocaleString('en-US')}
            </Typography>
            <Typography>
              <strong>Region:</strong> {country.region}
            </Typography>
            <Typography>
              <strong>Capital:</strong> {country.capital}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
