import { Grid, Button, Typography } from "@mui/material";
import getNamedCountries,{getBorderCountries} from "../../pages/api/country";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function SingleCountry({ country }) {
  const router = useRouter();
  return (
    <>
      <Grid container mt={12}>
        <Grid item md={12}>
          <Link href="/">
          <Button variant="contained" startIcon={<ArrowBackIcon/>}>
            Back
          </Button>
          </Link>
        </Grid>
        <Grid item md={6} mt={5}>
          <Image src={country.flags.png} height={400} width={600} alt={country.name}></Image>
        </Grid>
        <Grid item md={6} mt={5}>
          <Grid container >
            <Grid item md={12}>
              <Typography variant="h4">{country.name}</Typography>
            </Grid>
            <Grid item md={6}>
              <p>
                <strong>Native Name: </strong>
                {country.nativeName}
              </p>
              <p>
                <strong>Population: </strong>
                {country.population}
              </p>
              <p>
                <strong>Region: </strong>
                {country.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {country.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {country.capital}
              </p>
            </Grid>
            <Grid item md={6}>
              <p>
                <strong>Top Level Domain: </strong>
                {country.topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong>
                {country.currencies?.map((currency) => (
                  <span variant="body1" key={currency}>{currency.name}</span>
                ))}
              </p>
              <p>
                <strong>Languages:</strong>
                {country.languages.toString()}
                
              </p>
            </Grid>
            <Grid item md={12} sx={{marginTop:4}}>
              <strong>Border Countries</strong>
              <br />
              <div className="justify-content-around">

              {country.borders?.map((border) => (
                <Link href={`${border}`} key={border}>
                <Button variant="contained" className="padding-lr">{border}</Button>
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
SingleCountry.getInitialProps = async (ctx) => {
  const name = ctx.query.country;
  const country = await getNamedCountries(name);
  let countryData=country.data[0]
  console.log(country.data)
  countryData.languages=countryData.languages.map(val=>val.name)
  if(country.data[0].borders){

    const borders= await getBorderCountries(country.data[0].borders)
   
    countryData.borders=borders.data.map(name=>name.name);
   
    return { country: countryData };
  }
  
  return { country: country.data[0] };
};
export default SingleCountry;
