import { Grid, Button, Typography } from "@mui/material";
import getNamedCountries from "../../pages/api/country";
import { useRouter } from "next/router";
import Image from "next/image";
function SingleCountry({ country }) {
  const router = useRouter();
  return (
    <>
      <Grid container mt={12}>
        <Grid item md={12}>
          <Button variant="contained" onClick={() => router.back()}>
            Back
          </Button>
        </Grid>
        <Grid item md={6} mt={5}>
          <Image src={country.flags.png} height={400} width={600}></Image>
        </Grid>
        <Grid item md={6} mt={5}>
          <Grid container md={12}>
            <Grid item md={12}>
              <Typography variant="h5">{country.name}</Typography>
            </Grid>
            <Grid item md={6}>
              <p>
                <strong>Native Name:</strong>
                {country.nativeName}
              </p>
              <p>
                <strong>Population:</strong>
                {country.population}
              </p>
              <p>
                <strong>Region:</strong>
                {country.region}
              </p>
              <p>
                <strong>Sub Region:</strong>
                {country.subregion}
              </p>
              <p>
                <strong>Capital:</strong>
                {country.capital}
              </p>
            </Grid>
            <Grid item md={6}>
              <p>
                <strong>Top Level Domain:</strong>
                {country.topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong>
                {country.currencies?.map((currency) => (
                  <span variant="body1">{currency.name}</span>
                ))}
              </p>
              <p>
                <strong>Languages:</strong>
                {country.languages.map((language) => (
                  <span variant="body1" key={language.name}>
                    {language.name} ,
                  </span>
                ))}
              </p>
            </Grid>
            <Grid item>
              Border Countries{" "}
              {country.borders?.map((border) => (
                <Button variant="contained">{border}</Button>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
SingleCountry.getInitialProps = async (ctx) => {
  const name = ctx.query.country;
  const country = await getNamedCountries(name);

  return { country: country.data[0] };
};
export default SingleCountry;
