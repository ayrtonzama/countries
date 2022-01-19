import Image from "next/image";
import Link from "next/link";
import { Grid, Button, Typography } from "@mui/material";
import { getBorderCountries, getNamedCountries } from "../../pages/api/country";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CountryDetails from "../../components/CountryDetails";

function SingleCountry({ country }) {
  return (
    <>
      <Grid container mt={12}>
        <Grid item md={12}>
          <Link passHref href="/">
            <Button
              variant="contained"
              startIcon={<ArrowBackIcon />}
              className="backButton"
            >
              Back
            </Button>
          </Link>
        </Grid>
        <Grid item md={6} mt={5}>
          <Image
            src={country.flags.png}
            height={400}
            width={600}
            alt={country.name}
          ></Image>
        </Grid>
        <Grid item md={6} mt={5}>
          <Grid container className="content-text">
            <Grid item md={12} xs={12}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                {country.name}
              </Typography>
            </Grid>
            <Grid item md={6} xs={12} sx={{marginTop:'2rem'}}>
              <CountryDetails title="Native Name" value={country.nativeName} />
              <CountryDetails
                title="Population"
                value={country.population.toLocaleString("en-US")}
              />
              <CountryDetails title="Region" value={country.region} />
              <CountryDetails title="Sub Region" value={country.subregion} />
              <CountryDetails title="Capital" value={country.capital} />
            </Grid>
            <Grid item md={6} xs={12} sx={{marginTop:'2rem'}}>
              <CountryDetails
                title="Top Level Domain"
                value={country.topLevelDomain}
              />
              <CountryDetails
                title="Currencies"
                value={country.currencies?.map((currency) => (
                  <span variant="body1" key={currency}>
                    {currency.name}
                  </span>
                ))}
              />
              <CountryDetails
                title="Languages"
                value={country.languages.toString()}
              />
            </Grid>
            <Grid item md={12} xs={12} sx={{ marginTop: 4 ,marginBottom:4}}>
            <CountryDetails title="Border Countries" value="" />
            
              <div className="justify-content-around border-container">
                {country.borders?.map((border) => (
                  <Link passHref href={`${border}`} key={border}>
                    <Button
                      variant="contained"
                      className="border-btns"
                    >
                      {border}
                    </Button>
                  </Link>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

/**
 * Initial single country from name
 *
 * @param {*} context
 */
SingleCountry.getInitialProps = async (ctx) => {
  const name = ctx.query.country;
  const country = await getNamedCountries(name);
  let countryData = country.data[0];
  countryData.languages = countryData.languages.map((val) => val.name);
  // Mapping data for borders
  if (country.data[0].borders) {
    const borders = await getBorderCountries(country.data[0].borders);
    countryData.borders = borders.data.map((name) => name.name);
    return { country: countryData };
  }
  return { country: country.data[0] };
};

export default SingleCountry;
