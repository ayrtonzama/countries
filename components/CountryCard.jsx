import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "next/link";

function CountryCard({ country }) {
  return (
    <>
      <Link passHref href={"/country/" + country.name}>
        <Card
          elevation={1}
          sx={{ flex: 1, height: "100%" }}
          className="link-styles"
          raised
        >
          <CardMedia
            component="img"
            height="240"
            alt={country.name}
            image={country.flag}
          ></CardMedia>
          <CardContent sx={{ padding: "1rem" }}>
            <Typography variant="h5">{country.name}</Typography>
            <br />
            <Typography>
              <strong>Population:</strong>{" "}
              {country.population.toLocaleString("en-US")}
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

export default CountryCard;
