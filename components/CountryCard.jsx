import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "next/link";
export default function CountryCard({ country }) {
  return (
    <>
      <Link href={"/country/" + country.name}>
        <Card
          sx={{ flex: 1,height:'100%' }}
          onClick={() => {
            console.log(country.name);
          }}
          raised
        >
          <CardMedia
            component="img"
            height="240"
            image={country.flag}
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
      </Link>
    </>
  );
}
